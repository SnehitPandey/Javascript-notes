/*
DOM examples (short) — see notes at 06_DOM/dom-notes.md

This file contains small runnable snippets demonstrating selection,
manipulation, event listeners, creation/insertion, and delegation.
*/

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

// // Minimal performance note:
// // - Cache queries used multiple times
// // - Batch DOM writes where possible (use DocumentFragment)


// # DOM Notes — Quick Reference

// ## What is the DOM?
// - DOM = Document Object Model: a tree representation of HTML/XML documents.
// - The browser builds the DOM from HTML; JavaScript can read and modify it.

// ## Node types
// - Element nodes (tags), Text nodes, Comment nodes, Document node, DocumentFragment.

// ## Key concepts
// - Tree traversal: parentNode, childNodes, firstChild, lastChild, nextSibling, previousSibling.
// - Element-specific traversal: children, firstElementChild, lastElementChild.

// ## Selecting elements
// - `document.getElementById(id)` — single element by id.
// - `document.getElementsByClassName(className)` — live HTMLCollection.
// - `document.getElementsByTagName(tagName)` — live HTMLCollection.
// - `document.querySelector(selector)` — first match (modern, flexible).
// - `document.querySelectorAll(selector)` — static NodeList (use forEach).

// ## Reading & writing
// - Read text: `element.textContent`, `element.innerText` (layout-aware), `element.innerHTML` (HTML string).
// - Modify content: assign to `textContent` or `innerHTML`.
// - Attributes: `element.getAttribute(name)`, `element.setAttribute(name, value)`, `element.removeAttribute(name)`.
// - Dataset: `element.dataset.someValue` for `data-some-value`.

// ## Classes and styles
// - `element.classList.add('cls')`, `.remove()`, `.toggle()`, `.contains()`.
// - Inline styles: `element.style.propertyName = 'value'` (camelCase).
// - For computed styles: `getComputedStyle(element)`.

// ## Creating and inserting elements
// - `document.createElement(tagName)`
// - `document.createTextNode(text)`
// - Insert: `parent.appendChild(node)`, `parent.insertBefore(node, referenceNode)`, `parent.append(node)` (can append nodes or strings).
// - Replace/remove: `parent.replaceChild(newNode, oldNode)`, `node.remove()`.

// ## Events
// - Add listener: `element.addEventListener(type, handler, options)`.
// - Remove listener: `element.removeEventListener(type, handler)`.
// - Common events: `click`, `input`, `change`, `submit`, `keydown`, `keyup`, `DOMContentLoaded`.
// - Event object: `event.target`, `event.currentTarget`, `event.preventDefault()`, `event.stopPropagation()`.

// ## Event delegation
// - Attach listener on a parent and check `event.target` to handle many children efficiently.

// ## Forms
// - Access form fields: `form.elements`, `form.querySelector('input[name="foo"]')`, or direct names (`form.fieldName`).
// - Prevent default submit: `form.addEventListener('submit', e => e.preventDefault())`.

// ## Performance tips
// - Minimize DOM reads/writes mixing — batch reads and writes separately (avoid layout thrashing).
// - Use `DocumentFragment` or build HTML string and set `innerHTML` for bulk inserts.
// - Cache queries where possible.

// ## Lifecycle events
// - `DOMContentLoaded` — HTML parsed, DOM built (stylesheets may still load).
// - `load` — all resources (images, stylesheets) finished loading.

// ## Security
// - Avoid inserting untrusted HTML via `innerHTML` (XSS risk). Sanitize or use textContent.

// ## Small examples

// Selecting and changing text:

// ```js
// const el = document.querySelector('#title');
// el.textContent = 'Hello DOM';
// ```

// Adding an event listener and toggling a class:

// ```js
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', () => {
//   document.body.classList.toggle('dark');
// });
// ```

// Creating and inserting elements:

// ```js
// const list = document.querySelector('#list');
// const li = document.createElement('li');
// li.textContent = 'New item';
// list.appendChild(li);
// ```

// Event delegation example:

// ```js
// const container = document.querySelector('#items');
// container.addEventListener('click', (e) => {
//   const btn = e.target.closest('button');
//   if (!btn) return;
//   // handle button inside container
// });
// ```

// ## Quick checklist for tasks
// - Use `querySelector`/`querySelectorAll` for flexible selection.
// - Use `textContent` for plain text, `innerHTML` for HTML.
// - Prefer `addEventListener` over inline handlers.
// - Debounce expensive handlers on `scroll`/`resize`/`input` as needed.

// ---
// Notes created for quick reference and examples. Feel free to ask for more examples, exercises, or visual diagrams.