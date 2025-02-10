# 2025-02-10 Intro to useState

<details open>
<summary>Table of content</summary>

- [Props](#props)
  - [Pass down data](#pass-down-data)
  - [Pass down functions](#pass-down-functions)
- [useState](#usestate)
  - [Syntax](#syntax)
  - [Array destructuring](#array-destructuring)
  - [Update State](#update-state)
  - [Why regular variables doesn't work with React](#why-regular-variables-doesnt-work-with-react)
- [Event handling](#event-handling)
- [Stateful vs Stateless Component](#stateful-vs-stateless-component)

</details>

## Props

Props (short for "properties") are used to pass data from a parent component to a child component. Props make components reusable and allow dynamic content to be displayed. They are read-only, meaning that a component cannot modify the props it receives.

Props function similarly to regular parameters in JavaScript functions. When a component receives props, it is like a function receiving arguments. However, in React, props are essential for managing re-renders and ensuring the UI updates when data changes. This makes them a core part of React's component-based architecture.

[Back to top](#2025-02-05-props-usestate-och-statefullness)

### Pass down data

When passing data via props, a parent component provides values that the child component can access. This is useful for displaying dynamic content, such as user details or lists of items. The child component receives props as arguments and uses them to render content accordingly.

[Back to top](#2025-02-05-props-usestate-och-statefullness)

### Pass down functions

Besides passing static data, props can also be used to pass functions. This allows child components to communicate with their parent components, such as triggering an update or handling user interactions. This is commonly used for handling button clicks, form submissions, or updating state in the parent component.

[Back to top](#2025-02-05-props-usestate-och-statefullness)

## useState

`useState` is a React Hook that allows components to have state. State is a way to store and manage dynamic data within a component, enabling it to re-render when data changes.

[Back to top](#2025-02-05-props-usestate-och-statefullness)

### Syntax

The `useState` function initializes a state variable and provides a function to update it. The initial value of the state is defined when calling `useState`.

```jsx
// const [state, setState] = useState(defaultValue)
```

The first element is the actual value of the state at the given time when it's accessed.

The second element is a function that must be used to updated the value of the state. We are NOT allowed to update the state directly, because an update like that will not be recognized by React.

The naming of the variable and function can be whatever you like. It should however relate to the data it represents.

[Back to top](#2025-02-05-props-usestate-och-statefullness)

### Array destructuring

`useState` returns an array with two elements: the current state value and a function to update it. React developers commonly use array destructuring to extract these values, making state management clear and easy to read.

Array destructuring is a JavaScript feature that allows assigning values from arrays to variables in a single statement:

```jsx
const letters = [a, b];
```

This is just an normal array. To acces the elements, we need the square brackets or the `at()`-method.

```js
const a = letters[0];

// or

const a = letters.at(0);
```

But we can also use array destructuring.

```js
const [firstLetter, secondLetter] = letters;

console.log(firstLetter): // a
```

[Back to top](#2025-02-05-props-usestate-och-statefullness)

### Update State

State should always be updated using the setter function provided by `useState`. Directly modifying a state variable will not trigger a re-render. Instead, using the setter function ensures React knows about the change and updates the UI accordingly.

There are two ways of using the set-function.

#### Regular usage

```js
const [count, setCount] = useState(0);

// Update count
setCount(5);
console.log(count); // 5

setCount(20);
console.log(count); // 20
```

By just adding a value to as a parameter, will replace to old value, and this is fine if the new value has NOTHING to do with the old value.

#### Callback usage

The callback version is supposed to be used when the new value is being BASED on the old value. For instance, when we calculate a new value, and we need the old value to get to the new value.

```js
setCount((oldVal) => {
  // This can contain as much code as you need in order to calculate the new value.
  return oldVal + 1;
});
```

If the code is very simple, like a one-liner, we can omit the return keyword and the brackets.

```js
setCount((prev) => prev + 1);
```

[Back to top](#2025-02-05-props-usestate-och-statefullness)

### Why regular variables doesn't work with React

React re-renders components when state changes. Regular variables do not trigger re-renders when modified. This means that if a variable is updated without using `useState`, the UI will not reflect the change. `useState` ensures that React properly updates the component when state changes.

Example of a regular variable failing to update the UI:

```jsx
let count = 0;

function Counter() {
  return (
    <div>
      <p>Current count: {count}</p>
      <button
        onClick={() => {
          count += 1;
          console.log(count);
        }}
      >
        Increase
      </button>
    </div>
  );
}
```

In this example, clicking the button updates the `count` variable, but the UI does not reflect the change because React does not detect the update.

[Back to top](#2025-02-05-props-usestate-och-statefullness)

## Event handling

## Stateful vs Stateless Component

A **stateful component** manages its own state, using `useState` or other state management techniques. It can store and modify data, making it more interactive.

A **stateless component** does not have its own state. It relies entirely on props and does not change data within itself. Stateless components are simpler and easier to test since they do not manage dynamic data internally.

[Back to top](#2025-02-05-props-usestate-och-statefullness)

### Why favor stateless components?

In general, it is best to favor stateless components whenever possible. Stateless components are:

- **Easier to maintain** – They do not manage state, which reduces complexity and makes debugging simpler.
- **More reusable** – They can be used in multiple places without worrying about unexpected behavior due to state.
- **Better performance** – Stateless components do not trigger unnecessary re-renders, leading to more efficient applications.

Stateful components should be used when interaction and data changes are necessary. However, keeping stateful components at a minimum and managing state at higher levels (such as in container components) ensures better separation of concerns and a more predictable application structure.
