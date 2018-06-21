document.addEventListener('DOMContentLoaded', () => {
  let listIdCounter = 0
  let taskIdCounter = 0;
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");

  const lists = [];
  const tasks = [];
  //const app = new TaskLister();
  const ListApp = {

    };

  function newTaskForm() {
    return `
      <form id="create-task-form">
        <label for="parent-list">Select List:</label>
        <select id="parent-list">
          ${lists.map(l => `
            <option value="${l.title}" selected>
              ${l.title}
            </option>`)}

        </select>

        <label for="new-task-description">Task description:</label>
        <input required type="text" id="new-task-description" placeholder="description">

        <label for="new-task-priority">Priority level:</label>
        <input type="text" id="new-task-priority" placeholder="priority">
        <input type="submit" value="Create New Task">
      </form>
    `;
  }

  class Task {
    constructor(name, listId, priority) {
      this.name = name;
      this.listId = listId;
      this.priority = priority;
      this.id = ++taskIdCounter;
      tasks.push(this)
    }

    list() {
      return lists.find(list => list.id === this.listId);
    }

    toHtml() {
      return `<li>
        Task: ${this.name}
        <button data-list-title="${this.list().title}" data-task-name="${this.name}" class="delete-task">
          X
        </button>
        <br>
        Priority: ${this.priority}
      </li>`;
    }
  }

  class List {
    constructor(title) {
      this.title = title;
      this.id = ++listIdCounter;
      lists.push(this);
    }

    tasks() {
      return tasks.filter( task => task.listId === this.id )
      // return tasks collection (based on listId)
    }

    toHtml() {
      return `
        <div>
    <h2>${this.title}
      <button data-title="${this.title}" class="delete-list">
        X
      </button>
    </h2>
    <ul>
        ${this.tasks().map(t => t.toHtml()).join('')}
    </ul>
  </div>
      `;
    }
  }





  const list1 = new List('Our first list')
  const list2 = new List("Our second list");
  const task1 = new Task("Something to do with List 1", list1.id, "HIGH");
  const task2 = new Task("Something else to do with List 1", list1.id, "MED");
  const task3 = new Task("Something not related to List 1", list2.id, "LOW");
  console.log(newTaskForm());
  //list1.toHtml();



  // const task = new Task(v1, v2)
});
