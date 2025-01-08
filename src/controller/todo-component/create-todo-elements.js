import DomCache from '../../view/dom-cache';

export const addTodoInputLabel = document.createElement('label');
addTodoInputLabel.textContent = 'Add a todo item:';
addTodoInputLabel.setAttribute('for', 'add-todo-item-input');

export const addTodoInputText = document.createElement('input');
addTodoInputText.setAttribute('type', 'text');
addTodoInputText.setAttribute('id', 'add-todo-item-input');
addTodoInputText.setAttribute('placeholder', 'Enter a name');
addTodoInputText.required = true;

export const addTodoCategoryLabel = document.createElement('label');
addTodoCategoryLabel.textContent = 'Category type: ';
addTodoCategoryLabel.setAttribute('for', 'add-todo-category-label');

export const addTodoCategorySelect = document.createElement('select');
addTodoCategorySelect.setAttribute('id', 'add-todo-category-label');

export const workOption = document.createElement('option');
workOption.value = 'Work';
workOption.text = 'Work';

export const studyOption = document.createElement('option');
studyOption.value = 'Study';
studyOption.text = 'Study';

export const houseOption = document.createElement('option');
houseOption.value = 'House';
houseOption.text = 'House';

addTodoCategorySelect.appendChild(workOption);
addTodoCategorySelect.appendChild(studyOption);
addTodoCategorySelect.appendChild(houseOption);

export const addTodoDateLabel = document.createElement('label');
addTodoDateLabel.textContent = 'Due date:';
addTodoDateLabel.setAttribute('for', 'add-todo-item-date');

export const addTodoInputDate = document.createElement('input');
addTodoInputDate.setAttribute('type', 'date');
addTodoInputDate.setAttribute('id', 'add-todo-item-date');

export const addTodoSelectLabel = document.createElement('label');
addTodoSelectLabel.textContent = 'Priority type:';
addTodoSelectLabel.setAttribute('for', 'add-todo-item-select');

export const addTodoSelectList = document.createElement('select');
addTodoSelectList.setAttribute('id', 'add-todo-item-select');

const lowOption = document.createElement('option');
lowOption.value = 'p-low';
lowOption.text = 'low';

const mediumOption = document.createElement('option');
mediumOption.value = 'p-medium';
mediumOption.text = 'medium';

const highOption = document.createElement('option');
highOption.value = 'p-high';
highOption.text = 'high';

addTodoSelectList.appendChild(lowOption);
addTodoSelectList.appendChild(mediumOption);
addTodoSelectList.appendChild(highOption);

export const todoNotes = document.createElement('button');
todoNotes.textContent = '+ Notes';
todoNotes.setAttribute('class', 'todo-notes');

export const addTodoTextArea = document.createElement('textarea');
addTodoTextArea.setAttribute('id', 'add-todo-item-textarea');
addTodoTextArea.setAttribute('rows', '5');
addTodoTextArea.setAttribute('cols', '70');
addTodoTextArea.setAttribute('placeholder', 'Optional details...');

export const submitTodo = document.createElement('button');
submitTodo.textContent = 'Submit';
submitTodo.setAttribute('id', 'submit-todo');
submitTodo.setAttribute('type', 'submit');

export const cancelTodo = document.createElement('button');
cancelTodo.textContent = 'Cancel';
cancelTodo.setAttribute('id', 'cancel-todo');

export const todoButtonContainer = document.createElement('div');
todoButtonContainer.setAttribute('id', 'temp-todo-buttons');

export const todoNotesContainer = document.createElement('div');
todoNotesContainer.setAttribute('id', 'temp-todo-notes');

export const formTodoContainer = document.createElement('form');
formTodoContainer.setAttribute('id', 'form-todo-container');

export const toDoOptions = DomCache().getToDoOptions();
export const optionButtons = DomCache().getOptionButtons();
