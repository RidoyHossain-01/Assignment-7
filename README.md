# Readme for this website

## What is JSX, and why is it used?
JSX stands for **JavaScript XML**. It lets us write HTML-like code inside JavaScript. JSX makes React code easier to read, understand, and maintain because UI structure and logic stay together.

---

## What is the difference between State and Props?
- **Props** are used to pass data from a parent component to a child component. They are **read-only**.
- **State** is data managed inside a component. It **can change over time** and causes the component to re-render when updated.

---

## What is the useState hook, and how does it work?
`useState` is a React hook that lets you add state to functional components.  
It returns two things: the current state value and a function to update it.  
When the state updates, React automatically re-renders the component.

---

## How can you share state between components in React?
The most common way is **lifting state up** — move the state to a common parent component and pass it down using props.  
Other ways include **Context API** or state management libraries like Redux.

---

## How is event handling done in React?
Events in React are handled using **camelCase** syntax (e.g., `onClick`).  
You pass a function as the event handler, not a string. React handles events in a performant and predictable way.

---
