Intro to React
==============

## Morning Objective

Why React. Not How.

### Outline

- [x] Environment Setup
- [x] Why React?
- [x] Components
- [x] JSX
- [x] Props
- [ ] State

## Afternoon Objective

How React. Not Why.

### Outline

- [x] Question Me!
- [x] Why React? Why JSX?
- [ ] Vanilla JS vs React
- [x] Declarative vs Imperative
- [x] Briefly on the Virtual DOM
- [x] JSX in Depth
- [ ] Writing our first Component
- [ ] Adding props & state
- [x] Documentation / Thinking in React

## Lecture Notes

### Environment Setup

[Try React](https://reactjs.org/docs/try-react.html)

- create-react-app

  ```sh
  npm install -g create-react-app
  create-react-app my-app

  cd my-app
  npm start
  ```

- Briefly on what's under the hood:
  - npm / yarn == your bundler
  - package.json == your Gemfile
  - babel == transpiler
  - webpack == ties everything together
- [Minimal HTML File](https://raw.githubusercontent.com/reactjs/reactjs.org/master/static/html/single-file-example.html)
  - This is how you would have done it if we were in Mod 3.

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>Hello World</title>
      <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
      <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
    </head>
    <body>
      <div id="root"></div>
      <script type="text/babel">

        ReactDOM.render(
          <h1>Hello, world!</h1>,
          document.getElementById('root')
        );

      </script>
      <!--
        Note: this page is a great way to try React but it's not suitable for production.
        It slowly compiles JSX with Babel in the browser and uses a large development build of React.

        To set up a production-ready React build environment, follow these instructions:
        * https://reactjs.org/docs/add-react-to-a-new-app.html
        * https://reactjs.org/docs/add-react-to-an-existing-app.html

        You can also use React without JSX, in which case you can remove Babel:
        * https://reactjs.org/docs/react-without-jsx.html
        * https://reactjs.org/docs/cdn-links.html
      -->
    </body>
  </html>
  ```

### React Hello World

The anatomy of a React app:
- `document.getElementById('root')`

### Intro to JSX (JSX vs HTML)

The anatomy of JSX.
- Looks like HTML, but it's not HTML.
- It's syntatic sugar for `React.createElement`.
  - Note that JSX won't actually work in browser console!!
- What corresponds to what?
  - Code vs What's Displayed in Browser
  - Syntactic Sugar === Regular JavaScript
- Why do this?
  - Declarative vs. Imperative
  - Virtual DOM

### Declarative vs. Imperative

Abstraction, abstraction, abstraction.

### Intro to the Virtual DOM

- HTML is just a string.
- The DOM is a representation of that string we can interact with programmatically, ask questions to, etc.
- The Virtual DOM is a representation of that representation.
- React will be in charge of making sure the real DOM looks like and will always be in sync with the virtual DOM.
  - And it will do it in a way that keeps things fast.
  - Trust it. As developers, we stand on the shoulders of giants. Tons of other people have worked on this problem and this is the best solution they've come up with thus far.

### JSX in Depth

- More about `React.createElement`
- Open & Close Tags
- Upper case vs lower case
- [Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions): An expression is any valid unit of code that resolves to a value.
  - Expressions Evaluate
- Attributes => `props`
- `children`
- Components!
