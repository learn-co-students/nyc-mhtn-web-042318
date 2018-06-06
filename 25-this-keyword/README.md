# This

Code associated to the `JS this` lecture

## Objectives

* What is `this` in the context of JS
* Why is instrumenting `this` in even a thing JS?
* When is the value of `this` set
* What are the JS environment rules that govern `this`
    1.  `this` within a function called with the keyword `new` in front will point to the newly created object
    1.  `this` within a function called with apply/call/bind will be the object passed as the first parameter
    1.  `this` within a function called with a context (i.e. Object.method()) will be the object.
    1.  `this` for a simple function call (fn()) will be the window (browser) or the global object (Node). If we are in strict mode this will be undefined for simple function calls
* How do we instrument `this`
* P.S. arrow function, strict mode and arrow functions as methods

> MDN `this` article: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
