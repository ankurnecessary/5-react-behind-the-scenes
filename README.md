# 5-react-behind-the-scenes
To learn what happens behind the scenes
Working with:

1. components
2. Importing image in a component.
3. useState()
4. Derived state from existing state variable.
5. Tailwind css - [Practice Project 2 - react-project-management]
6. useRef()
7. forwardRef()
8. useImperativeHandle()
9. createPortal()
10. createContext()
11. useContext()
12. <React.StrictMode>
13. Children prop
14. Using rest operator while using component tag.
15. useReducer()
16. useEffect() - with blank dependency array will fire only once at the end of first render of the component.
17. useEffect() - with dependency array will fire on first render of the component and every time value of the variables in dependency array changes.
18. useEffect() - with a return function inside useEffect() function. The function returned will fire when the related component dismounts. That is why it is also called clean up function.
19. We generally use useEffect() for the asynchronous code which will resolve in future and can change the state of the application.
20. useEffect()'s dependency array should include useState() variables, useContext() variables and props which are used inside the useEffect()'s first function argument.
21. useCallback() - Whenever we wrap any function inside the useCallback() it stops getting recreated again and again when a component rerenders, if the dependency array is blank. If not then the function in useCallback() will be recreated when the value of any of the dependency change.
22. In the dependency array of useEffect() and useCallback() function we put props, state variables or other functions that are dependent on the state variables like context values and other functions. You will not add the state updating function of useState() directly.
23. useState()'s state updating function never gets recreated again in react. So, we need not pass it as a dependency in useCallback() or useEffect().
24. We have to add **variables related to derived state** as dependencies in useCallback() and useEffect().
25. ***We should avoid or at least minimize the usage of useEffect() in our application as a best practice.***
26. useRef() value doesn't change when component function renders again and again and......
27. If we have multiple components having **key** attribute with them and all of them belong to same entity then we should consider making a separate component for that entity and use **key** attribute over it.
28. We as a developer cannot consume key prop. It is exclusively for the react.
29. Why use PropTypes instead of TypeScript? Answer: type-checking props using TypeScript can only be effective when the prop's value is hardcoded. Even though you claim that the data from the API is a number, you won't get any errors when the data is a string. Since type-checking is done during runtime, PropTypes is a better tool for unknown data.
30. React query is a good plugin for HTTP calls via react application. AJAX
31. Whenever a component rerenders because of state function being called, it's child components are also rerendered.
32. [React.memo](https://docs.google.com/document/d/1IKjPhw6a3TPKvmeJ9743PljP6ci7UkbkgNa3sQwVRWs/edit#heading=h.raq8jq8e7749)

[Eslint configuration - Best linting configuration is to use "format on save" and don't use "formatting option of ES Lint"](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8231814#questions/20789494)

[This link helps in setting up the most important rule that will help in highlighting the unused variables and highlighting the undeclared variable usage](https://www.dhiwise.com/post/essential-eslint-rules-for-react#1-react-jsx-uses-react-)

[To show errors for unused variables / undeclared variables via eslint](https://eslint.org/docs/latest/rules/no-undef)

[Refs vs State Values](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39836310#questions)

In the code below we are iterating over an array of ids i.e. **storedIds** and on the basis of ids we are fetching places. Finally, we are storing those places in an array and assigning it to variable **storedPlaces**.

```Javascript
const storedPlaces = storedIds.map((id) => {
  return AVAILABLE_PLACES.find((place) => place.id === id);
});
```

A way of shuffling the array elements.

``` Javascript
shuffledAnswers.sort(() => Math.random() - 0.5);
```
