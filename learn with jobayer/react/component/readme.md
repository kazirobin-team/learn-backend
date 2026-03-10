## Creating a React component is simple. A component is just a JavaScript function that returns JSX (HTML-like code).

## 1️⃣ Create a Functional Component (Most Common)
```
function Hello() {
  return <h1>Hello World</h1>;
}
export default Hello;
```

## Explanation:
- function Hello() → Creates the component
- return → Returns JSX (UI)
- export default → Allows using this component in other files

### 2️⃣ Use the Component in App
```
import Hello from "./Hello";

function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}
export default App;
```
## Explanation:

- import Hello → Import the component
- <Hello /> → Use it like an HTML tag

## 3️⃣ Short Arrow Function Component
```
const Hello = () => {
  return <h1>Hello World</h1>;
};

export default Hello;
```