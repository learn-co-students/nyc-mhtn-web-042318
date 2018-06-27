State, Events, and Forms && Lifting State
=========================================

## Objectives

- [x] Instantiate state in and out of the constructor
- [x] Trigger rerenders by calling `setState`
- [x] Use event handlers to manipulate the DOM by changing values in state
- [x] Understand and draw a Component Hierarchy
- [x] Write fully controlled forms
- [ ] Differentiate between presentational(dumb) and container(smart) components
- [x] Get familiarity with component hierarchy and the flow of information
- [x] Lifting state

### Outline

- [x] State / setState
  - [ ] More on Imperative vs Declarative
- [ ] Event Handlers
  - [x] Synthetic Events - Why?
  - [x] Relation to DOM events
  - [x] Event Pooling?
  - [x] `event` object
  - [x] change state with an event handler
  - [x] binding
- [x] Flow of Information in React
  - [x] Intro to the Component Hierarchy
- [x] Forms
  - [x] Controlled Forms
- [x] Lifting State
  - [ ] Source of Truth

## Lecture Notes

### State / setState

See previous lecture notes.

Also see Thinking in React from the docs.

1. Identify State
2. Add State

Build something out to see how this works.
- What has state, what doesn't?
  - State is a representation of the state of your app.
  - State will change.
- Container vs Presentational Components (if applicable)

### Event Handlers

- React wraps all events and tries its best to abstract them into a single API that _should_ act the same across browsers.
- This is one reason why React has what they call [_Synthetic Events_](https://reactjs.org/docs/handling-events.html).
- Another reason is so the same API for all event handlers can be used for other platforms. For example: Instead of `react-dom`, we use `react-native`.

**The `event` Object**

- It is pooled. What that means is that this object will not live beyond the context it's called in. So if you want to pass the `event` object around and use it in an asynchronous function, it will suddenly "disappear" meaning the values in it become null.
- React built it this way for performance reasons.
- You can keep the `event` object around for longer if you use `event.persist()`.
- Other useful things in the `event` object:
  - `event.target` => points to the object (in our case a DOM element) where the `event` originates from.
  - `event.target.value`
  - `event.target.name`
  - `event.target.dataset.dataValueCamelCased` === `event.target.getAttribute('data-value-as-written')`

### Forms

You can use DOM forms as is in React. However, you'd have to have a way of pulling out the data in the form fields when you want to do something. That could be done with `event.target` trickery or `refs`. However, that is icky and not very "Reacty". (yes, there are legit use cases for those two methods, but it's rare)

Instead, what React wants is something called _Controlled Forms_. This involves keeping track of all form field data in `state` via `onChange` events and using `value` to control exactly what is displayed in the form field.

```javascript
// State has form field values:
state = {
  beef: ""
}

// ...
handleSubmit = (event) => {
  // default behavior of input submit is to do a POST
  // which would refresh the page and cause us to lose
  // all of our state, so we have to stop it!
  event.preventDefault();
  // Do Stuff Here
}

handleChange = (event) => {
  // Updates the state so we are displaying the
  // most up to date value being entered into
  // the input field.
  this.setState({
    beef: event.target.value
  })

  // Since it's controlled, we could always mess
  // around with the data being entered to do
  // useful stuff like:
  //   - validation
  //   - spellchecking
  //   - auto-formating (think phone numbers)
  // Or you can just mess with your users and do
  // things like capitalizing everything:
  // this.setState({
  //   beef: event.target.value.toUpperCase()
  // })
}

// ...

// What makes this a controlled form is having **both**
// _value_ and _onChange_.
<form onSubmit={this.handleSubmit}>
  <input
    type="text"
    name="username"
    value={this.state.beef}
    onChange={this.handleChange}
  />
  <input type="submit" value="Submit Button" />
</form>
```

**Bonus Shortcuts!**

If you have multiple input fields, you'd think you'd have to write multiple `onChange` functions. One for each, right?

No! There's a shortcut! (if you do some consistent naming)

```javascript
// State has form field values.
// Make each key identical to what you write for name=""
// in the input field (go take a look at the JSX then
// look at handleChange()).
state = {
  username: "",
  password: "",
  email: ""
}

// ...

// One handleChange to rule them all!
// Since our name="" is the same as the key in state,
// we can now use event.target.name + the power of
// JavaScript to do this:
handleChange = (event) => {
  // The [] allows us to use a variable's value
  // as the key. That means that this will work
  // for all inputs whose name is the same as the
  // key in state!!
  this.setState({
    [event.target.name]: event.target.value
  })
  // However, if you want to do any fancy stuff
  // (e.g., validation), then you'd have to write
  // a custom handleChange for that specific input
  // field.
}

// ...

// Check out that consistent naming!!
// name="username"
// value={this.state.username}
// name="password"
// value={this.state.password}
// name="email"
// value={this.state.email}
<form onSubmit={this.handleSubmit}>
  <input
    type="text"
    name="username"
    value={this.state.username}
    onChange={this.handleChange}
  />
  <input
    type="password"
    name="password"
    value={this.state.password}
    onChange={this.handleChange}
  />
  <input
    type="text"
    name="email"
    value={this.state.email}
    onChange={this.handleChange}
  />
  <input type="submit" value="Submit Button" />
</form>
```

### Lifting State

[Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)

> Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.

If two sibling components need access to the same `state`, you will want to place the shared `state` in a parent container. Then you can pass down that `state` as well as any functions that need to modify the state as props to the two sibling components that need to display and/or change that data.

**Metaphor Time!**

**DISCLAIMER:** _This metaphor may confuse you more, so read only if you dare!!_

Think of your React app as a hydroelectric dam made of legos. Your legos are React components. `state` is like the energy / water that can be generated and used by the legos (aka: components). That energy comes in the form of `props`.

Anytime a component needs energy, it can either be from itself (poke a hole in that lego) === the component has `state`.

OR

If multiple components need that energy, you poke a hole in some higher up lego (a container component holding the other components) so it can spill out water (aka: `state`) and give it to its children via `props`.

## Extras

- [React Events in Depth](https://www.youtube.com/watch?v=dRo_egw7tBc)
- [Function Binding](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
- [Class Field Declarations](https://github.com/tc39/proposal-class-fields)
- [event.target vs event.currentTarget](https://github.com/facebook/react/issues/5733)
- [JavaScript Event Delegation, and event.target vs. event.currentTarget](https://medium.com/@florenceliang/javascript-event-delegation-and-event-target-vs-event-currenttarget-c9680c3a46d1)
