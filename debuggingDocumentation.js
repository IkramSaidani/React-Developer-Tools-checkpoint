
/**
 * Documentation

App.jsx: Parent component that renders the todos.
TodoList.jsx: Displays the list of todos.
TodoItem.jsx: Renders individual todo items.
************Issues Identified****************
Adding a new todo doesn’t update the list correctly.
changing the status of completed doesn’t work as expected.
********************Tools Used***************************
React Developer Tools (browser extension)
***************issues resolved****************
Issue 1: Adding a new todo doesn’t update the list correctly.

onClick on the "Add Todo" button new todo does'nt be added, or the new todo isn’t displayed correctly.
Debugging Steps:

1: Open React Developer Tools and inspect the App component.
2: Check the todos state array before and after clicking the "Add Todo" button=====>The todos state does not update with the new todo item.
3: Review the addTodo function in App.js:

Issue 2: changing the status of completed doesn’t work as expected.

Clicking a todo item does not update its completion status (the item should be struck through when completed).
Debugging Steps:

1: Open React Developer Tools and inspect one of the TodoItem components.
2: Verify that the todo prop includes a completed field that reflects the todo’s status.
3: Review the updateTodo function in App.js


Issue 1 (Adding a new todo): Resolved by generating unique ids.
Issue 2 (updating todo completion): Confirmed that updateTodo works and todos update properly.
 */