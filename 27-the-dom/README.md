# The Document Object Model

Code associated to the Document Object Model lecture

## Objectives

* From a string to a page
* From a static page to an interactive experience
* Abstraction layer between HTML and JS
  * DOM
  * DOM as a tree
  * DOM elements
* DOM Manipulation
  * Finding DOM Elements
  * Creating DOM elements
    * From text to DOM
    * From objs to DOM
  * Altering DOM elements
* What is jQuery
* **Build something** (rspectGram)

## Selectors

| Selector name                   | Return shape   | Return type    | Live? | Reference             | forEach? |
| ------------------------------- | -------------- | -------------- | ----- | --------------------- | -------- |
| `node.getElementById()`         | Single element | Element        | N/A   | https://goo.gl/8cHGoy | N/A      |
| `node.getElementsByClassName()` | Collection     | HTMLCollection | Yes   | https://goo.gl/qcAhcp | No       |
| `node.getElementsByTagName()`   | Collection     | HTMLCollection | Yes   | https://goo.gl/QHozSh | No       |
| `node.querySelector()`          | Single element | Element        | N/A   | https://goo.gl/6Pqbcc | N/A      |
| `node.querySelectorAll()`       | Collection     | NodeList       | Node  | https://goo.gl/vTfXza | Yes      |

Resources:

* [MDN Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
* [MDN NodeList reference](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
* [MDN HTMLCollection reference](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)
* [CSS Selectors Cheatsheet](https://guide.freecodecamp.org/css/tutorials/css-selectors-cheat-sheet/)
