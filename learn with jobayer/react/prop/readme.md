## React Props (short for properties) are used to pass data from a parent component to a child component. They make components reusable.

## 1️⃣ Create Child Component
function Welcome(props) {
  return <h2>Hello, {props.name}</h2>;
}
## 2️⃣ Pass Props from Parent
function App() {
  return <Welcome name="Jobayer" />;
}
## 3️⃣ Output
Hello, Jobayer

## ✅ Summary:

- Props pass data Parent ➜ Child
- Props are read-only (cannot be changed)
- Access using props.propertyName

## ⭐ Modern Way (Destructuring)
function Welcome({ name }) {
  return <h2>Hello, {name}</h2>;
}