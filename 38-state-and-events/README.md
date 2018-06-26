State and Events
================

## Objectives

- Learn to identify components
- Write components (functional and class)
- Identify props vs state
- Add props to our components
- Add state to our components
- Learn about event handlers
- Intro to the Component Hierarchy

### Outline

- [x] Pick a domain!
- [x] Build an app iteratively
  - [ ] Deeper Dive into React

## Lecture Notes

- Identify Components
  - Single Responsibility Principle!!
  - Reusing Components
- Props vs State
- <=== _we stopped here right at state_
- Flow of Information in React
- Event Handlers
  - event object
  - change state in event handler
  - binding

### What will we build?

1. torpedo Detection using sonar and lidar 1
2. cupcakes 8
3. coloring books 4
4. crayon maker 4
5. pizza toppings 8

Cupcake Toppings & Fillings (with detection as a stretch goal)

cupcakes = []
toppings = []
fillings = []

### Setup: create-react-app

- Setup what we'll be building today.
- Benefits to using it.
- Individual parts:
  - `public` => folder containing files served by our web server
  - `src` => all of our React code
    - `index.js` => entry point to the React app; this has `ReactDOM.render` which puts all of our code into the DOM element we tell it to put it into (in our case, `<div id="root">`)
    - `App.js` => our root React component; all apps will have it
    - `App.css`, `index.css` => css files
    - `App.test.js` => test file
    - `registerServiceWorker.js` => helper file for cache stuff
  - `.gitignore` => git ignore
  - `package.json` => your "Gemfile"
  - `README.md` => readme file

### React Components

- Identify components with the Single Responsibility Principle
- Functional vs Class Components
  - Functional is almost always a Presentational Component
  - Class Components can have `state` and lifecycle methods.
- Attributes => `props`
- return / render
  - Must always return 1 object or an array of objects.
- Composition over Inheritance => we'll get to this eventually

### Props vs State

Learn by doing! Let's build something that needs state!

- [`state` is data that will change](https://facebook.github.io/react-native/docs/state.html).
- How do we define it?
  - `constructor` vs `state = {}`
- How do we change it?
  - **Never** mutate `state`!!!
  - Always **make copies** of `state`!!!
  - We change it with `setState`
- *Briefly* - Event Handlers
  - `onClick` to execute some action
- Debugging `state`:
  - `setState` is asynchronous
    - `debugger` gotcha
  - `setState` callback function
  - `render` as a way to also test `setState`
- Binding functions to use `setState`; why?
- `props` go down, `state` goes up

Why is all of this nice?
- Component isolation === reusability up up up!!

### Flow of Information in React

> `props` go down, `state` goes up

What does this really mean?
- Draw a picture to explain the flow of information.
- For more context, we need to see more of _Thinking in React_.

## Extras / Common Mistakes

`constructor()` vs `constructor(props)`
- https://github.com/facebook/react/issues/11671

Commenting in JSX
- `{/* commented */}`

Class Field Declarations
- `state` in constructor vs `state = {}` in class definition

Functional Components `props` argument:
- Don't need it. They are just functions.
- However, if you don't pass it in, your function won't have access to `props`!

`map` returning `undefined` is a common mistake
