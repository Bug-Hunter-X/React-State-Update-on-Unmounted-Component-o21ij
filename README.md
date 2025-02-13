# React State Update on Unmounted Component

This repository demonstrates a common React bug involving updating the state of an unmounted component, leading to warnings and potential memory leaks. The bug and its solution are provided with explanations.

## Bug

The `bug.js` file contains a React component that updates its state asynchronously using `setTimeout`. If the component unmounts before the timeout completes, an error occurs because React attempts to update the state of a component that no longer exists.

## Solution

The `bugSolution.js` file presents the corrected code.  It uses the `useEffect` hook and its cleanup function to cancel the timeout if the component unmounts, effectively preventing state updates on an unmounted component.