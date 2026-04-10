In JavaScript, functions can be categorized in several ways. Here are the main **types** based on how they are defined and behave:

## 1. **Function Declarations** (Named Functions)
```javascript
function greet() {
  return "Hello";
}
```

## 2. **Function Expressions**
```javascript
const greet = function() {
  return "Hello";
};
```

## 3. **Arrow Functions** (ES6)
```javascript
const greet = () => "Hello";
```

## 4. **Immediately Invoked Function Expressions (IIFE)**
```javascript
(function() {
  console.log("Runs immediately");
})();
```

## 5. **Anonymous Functions**
```javascript
setTimeout(function() {
  console.log("No name here");
}, 1000);
```

## 6. **Constructor Functions** (for creating objects)
```javascript
function Person(name) {
  this.name = name;
}
const john = new Person("John");
```

## 7. **Generator Functions** (ES6)
```javascript
function* generateNumbers() {
  yield 1;
  yield 2;
}
```

## 8. **Async Functions** (ES2017)
```javascript
async function fetchData() {
  return await apiCall();
}
```

## 9. **Recursive Functions**
```javascript
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
```

## 10. **Higher-Order Functions** (functions that return or accept functions)
```javascript
function multiplier(factor) {
  return function(x) {
    return x * factor;
  };
}
```

## 11. **Method Definitions** (in objects/classes)
```javascript
const obj = {
  method() {
    return "method";
  }
};
```

## 12. **Accessor Functions** (getters/setters)
```javascript
const obj = {
  get name() {
    return this._name;
  },
  set name(value) {
    this._name = value;
  }
};
```

---

**Most common classification** (simplified):
- **3 main kinds** based on syntax: Declarations, Expressions, Arrow functions
- **6 practical kinds** including: Regular, Arrow, Async, Generator, Constructor, IIFE

The exact count depends on how you categorize them, but these 12 represent all major functional patterns in JavaScript.