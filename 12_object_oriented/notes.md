# Object-Oriented Programming (OOP) in JavaScript

## 1) Core Ideas
- **Object**: A collection of properties (data) and methods (behavior).
- **Class**: A blueprint for creating objects (syntax sugar over prototypes).
- **Encapsulation**: Grouping data + methods and controlling access.
- **Abstraction**: Hiding complex implementation details.
- **Inheritance**: Reusing behavior from a parent.
- **Polymorphism**: Same interface, different implementations.

---

## 2) Objects & Methods
```js
const user = {
  name: "Ava",
  greet() {
    return `Hi, ${this.name}`;
  }
};
```

---

## 3) Constructor Functions
```js
function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function () {
  return `Hi, ${this.name}`;
};

const p1 = new Person("Sam");
```

---

## 4) ES6 Classes
```js
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `Hi, ${this.name}`;
  }
}

const p1 = new Person("Sam");
```

---

## 5) Inheritance (extends)
```js
class Employee extends Person {
  constructor(name, role) {
    super(name);
    this.role = role;
  }
  sayHi() {
    return `${super.sayHi()} (${this.role})`;
  }
}

const e1 = new Employee("Kim", "Dev");
```

---

## 6) Encapsulation & Private Fields
```js
class BankAccount {
  #balance = 0; // private field
  deposit(amount) {
    this.#balance += amount;
  }
  getBalance() {
    return this.#balance;
  }
}
```
> Private fields are supported in modern JS.

---

## 7) Getters & Setters
```js
class Product {
  constructor(price) {
    this._price = price;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    if (value < 0) throw new Error("Invalid price");
    this._price = value;
  }
}
```

---

## 8) Polymorphism
```js
class Animal {
  speak() {
    return "sound";
  }
}
class Dog extends Animal {
  speak() {
    return "woof";
  }
}
const pets = [new Animal(), new Dog()];
pets.map(p => p.speak()); // ["sound", "woof"]
```

---

## 9) Composition over Inheritance
```js
const canDrive = (state) => ({
  drive: () => `${state.name} drives`
});
const canCode = (state) => ({
  code: () => `${state.name} codes`
});

const createDev = (name) => {
  const state = { name };
  return Object.assign({}, canDrive(state), canCode(state));
};

const dev = createDev("Lee");
```

---

## 10) `this` Binding Basics
- `this` in a method points to the object.
- Arrow functions **do not** bind their own `this`.
- Use `.bind()`, `.call()`, `.apply()` to control `this`.

---

## 11) Prototypes Quick Notes
- Objects inherit from their prototype.
- `Object.getPrototypeOf(obj)` shows the prototype.
- `class` uses prototypes under the hood.

---

## 12) Common Pitfalls
- Forgetting `new` with constructor functions.
- Using arrow functions as methods when `this` is needed.
- Overusing inheritance instead of composition.

---

## 13) Quick Reference
- `class`, `extends`, `super()`
- `#privateField`
- `get` / `set`
- `Object.create()`, `Object.assign()`