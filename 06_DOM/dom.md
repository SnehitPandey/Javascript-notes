document.addEventListener('DOMContentLoaded', () => {
	// Selection examples
	const title = document.getElementById('title'); // null if missing
	const primaryBtn = document.querySelector('.btn');
	const list = document.querySelector('#list');

	if (title) title.textContent = 'Hello DOM (from dom.js)';

	// Toggle a class on click
	if (primaryBtn) {
		primaryBtn.addEventListener('click', () => {
			document.body.classList.toggle('dark');
		});
	}

	// Create and append an element
	if (list) {
		const li = document.createElement('li');
		li.textContent = 'New item added by dom.js';
		list.appendChild(li);
	}

	// Event delegation example
	const container = document.querySelector('#items');
	if (container) {
		container.addEventListener('click', (e) => {
			const btn = e.target.closest('button');
			if (!btn || !container.contains(btn)) return;
			console.log('Clicked delegated button:', btn);
		});
	}

	// Helper: iterate NodeList
	const nodes = document.querySelectorAll('.to-log');
	nodes.forEach((n, i) => console.log('to-log', i, n));
});

// Minimal performance note:
// - Cache queries used multiple times
// - Batch DOM writes where possible (use DocumentFragment)


# DOM Notes — Quick Reference

## What is the DOM?
- DOM = Document Object Model: a tree representation of HTML/XML documents.
- The browser builds the DOM from HTML; JavaScript can read and modify it.

## Node types
- Element nodes (tags), Text nodes, Comment nodes, Document node, DocumentFragment.

## Key concepts
- Tree traversal: parentNode, childNodes, firstChild, lastChild, nextSibling, previousSibling.
- Element-specific traversal: children, firstElementChild, lastElementChild.

## Selecting elements
# DOM Notes — Concise Reference

This file is a compact DOM reference with short, copy-pasteable examples. Use these snippets inside an HTML file and open in the browser.

## Core idea
- DOM = Document Object Model: the browser's tree representation of the page. JavaScript reads and updates that tree.

## Selectors (choose modern `querySelector` unless you need a live collection)
- `document.getElementById(id)` — single element (fast).
- `document.getElementsByClassName(name)` — live HTMLCollection (updates as DOM changes).
- `document.getElementsByTagName(tag)` — live HTMLCollection.
- `document.querySelector(sel)` — first match (flexible, recommended).
- `document.querySelectorAll(sel)` — static NodeList (supports `forEach`).

Live vs static example:
```js
const live = document.getElementsByClassName('item'); // updates automatically
const staticList = document.querySelectorAll('.item'); // snapshot
```

## Attributes vs properties
- Attributes: `getAttribute(name)` / `setAttribute(name, value)` — data in HTML.
- Properties: `el.id`, `el.checked` — JS object properties reflecting current state.
- Example: `input.getAttribute('value')` vs `input.value`.

## textContent, innerText, innerHTML
- `textContent` — fastest, returns all text, safe for user content.
- `innerText` — layout-aware (reads visible text), slower.
- `innerHTML` — parse/render HTML; dangerous with untrusted input (XSS).

## Classes & styles
- `el.classList.add('x')`, `.remove('x')`, `.toggle('x')`, `.contains('x')`.
- Inline style: `el.style.backgroundColor = 'red'` (camelCase).
- Computed style: `getComputedStyle(el).width`.

## Create / Insert / Remove
- `document.createElement(tag)`, `document.createTextNode(text)`.
- Insert: `parent.appendChild(node)`, `parent.insertBefore(node, ref)`, `parent.append(nodeOrString)`.
- Remove/replace: `node.remove()`, `parent.replaceChild(newNode, oldNode)`.
- For many inserts, use `DocumentFragment` or build string + `innerHTML`.

DocumentFragment example:
```js
const frag = document.createDocumentFragment();
for (let i=0;i<100;i++){
	const li = document.createElement('li');
	li.textContent = `Item ${i+1}`;
	frag.appendChild(li);
}
document.querySelector('#list').appendChild(frag);
```

## Events & delegation
- `el.addEventListener(type, handler, options)`; prefer this over inline handlers.
- Event object: `e.target`, `e.currentTarget`, `e.preventDefault()`, `e.stopPropagation()`.
- Delegation: attach listener to parent, use `e.target.closest(selector)` to handle child actions.

Delegation example:
```js
const container = document.querySelector('#items');
container.addEventListener('click', (e) => {
	const btn = e.target.closest('button');
	if (!btn || !container.contains(btn)) return;
	// handle button inside container
});
```

## Forms
- Access fields: `form.elements` or `form.querySelector('input[name=foo]')`.
- Prevent submit: `form.addEventListener('submit', e => e.preventDefault())`.

## Performance tips
- Cache repeated queries: `const el = document.querySelector(...)`.
- Minimize alternating reads/writes to avoid layout thrashing.
- Batch inserts with `DocumentFragment` or an HTML string.

## Security
- Never insert untrusted HTML via `innerHTML` without sanitizing.

## Small, copyable snippets

Safe text update:
```js
const title = document.querySelector('#title');
if (title) title.textContent = 'Hello DOM';
```

Toggle class on button click:
```js
const btn = document.querySelector('.btn');
if (btn) btn.addEventListener('click', () => document.body.classList.toggle('dark'));
```

Create & append a single element:
```js
const list = document.querySelector('#list');
if (list) {
	const li = document.createElement('li');
	li.textContent = 'New item';
	list.appendChild(li);
}
```

Iterate NodeList:
```js
document.querySelectorAll('.to-log').forEach((n,i) => console.log(i,n));
```

DOMContentLoaded pattern:
```js
document.addEventListener('DOMContentLoaded', () => {
	// safe DOM access here
});
```

## Quick checklist
- Prefer `querySelector` / `querySelectorAll` for flexible, readable selection.
- Use `textContent` for text and `innerHTML` only for trusted markup.
- Use `addEventListener` and delegation for dynamic lists.
- Batch DOM writes and cache queries for performance.

---
Notes: concise, example-focused DOM reference. Ask for exercises, diagrams, or more examples if you'd like them added.
