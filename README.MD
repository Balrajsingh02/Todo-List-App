# Todo List App

This is a simple Todo List application implemented using HTML, CSS, and JavaScript.

## Description

The Todo List app allows users to add, edit, delete tasks, mark tasks as complete, and prioritize important tasks. It provides a clean and intuitive interface for managing tasks efficiently.

## Features

- **Add Task**: Users can add new tasks by entering task details in the input field and clicking the "Add Task" button.
- **Edit Task**: Users have the option to edit tasks by clicking on the "Edit" button next to each task.
- **Delete Task**: Users can delete tasks by clicking on the delete icon associated with each task.
- **Complete Task**: Users can mark tasks as completed by clicking on the task itself. The task will be crossed out.
- **Prioritize Task**: Users can prioritize important tasks by clicking on the important icon, which moves the task to the top of the list and changes its background color.
- **Task List**: Displays the list of tasks with options to mark them as completed, edit, delete, and prioritize.

## Usage

1. **Adding a Task**:

   - Enter the task details in the input field labeled "add task".
   - Click the "Add Task" button to add the task to the list.

2. **Editing a Task**:

   - Click on the "Edit" button next to the task you want to edit.
   - Update the task details in the input field and press Enter to save the changes.

3. **Deleting a Task**:

   - Click on the delete icon next to the task you want to delete.

4. **Completing a Task**:

   - Click on the task itself to mark it as completed. The task will be crossed out.

5. **Prioritizing a Task**:
   - Click on the important icon next to the task to prioritize it. The task will move to the top of the list and change its background color.

## Installation

1. Clone this repository to your local machine.
2. Open the `index.html` file in your web browser.

## Dependencies

- [Font Awesome](https://fontawesome.com/): Used for icons in the application.
- [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins): Used for styling text elements.
- [Important Icons by Freepik](https://www.flaticon.com/free-icons/important): Used for the important icon.

## JavaScript Functionality

The JavaScript code provides the functionality for the Todo List app. Here's a summary of key functions:

- **addTask**: Adds a new task to the list when the "Add Task" button is clicked.
- **keyDownHandler**: Handles the keydown event, specifically the Enter key, for adding tasks.
- **modifiTask**: Modifies tasks based on user interactions such as deletion, editing, marking as important, and completing.
- **setItemLocalStorage**: Sets and updates task data in the local storage.
- **showItemLocalStorage**: Retrieves and displays task data from the local storage.
- **Event Listeners**: Adds event listeners for adding tasks, handling key events, and modifying tasks.
