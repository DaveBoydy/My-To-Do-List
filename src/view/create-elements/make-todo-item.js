export default function CreateTodoItem() {
    const makeTodo = (
        textValue,
        categoryValue,
        dateValue,
        selectValue,
        textAreaValue,
        todoKey,
    ) => {
        if (textValue === '') textValue = 'ToDo Item';
        const detailsButton = document.createElement('button');
        detailsButton.setAttribute('class', 'todo-details');
        detailsButton.textContent = '?';

        const todoName = document.createElement('div');
        todoName.setAttribute('class', 'todo-name');
        todoName.textContent = textValue;

        const removeTodo = document.createElement('div');
        removeTodo.setAttribute('class', 'remove-todo');
        removeTodo.textContent = 'X';

        const interfaceContainer = document.createElement('div');
        interfaceContainer.setAttribute('class', `todo-ui ${selectValue}`);

        const dataContainer = document.createElement('div');
        dataContainer.setAttribute('class', 'todo-data');

        const todoCategory = document.createElement('p');
        todoCategory.setAttribute('class', 'todo-category');
        const boldCategory = document.createElement('b');
        boldCategory.textContent = 'Category: ';
        const spanCategory = document.createElement('span');
        spanCategory.textContent = categoryValue;

        todoCategory.appendChild(boldCategory);
        todoCategory.appendChild(spanCategory);
        dataContainer.appendChild(todoCategory);

        const detailsData = document.createElement('p');
        detailsData.setAttribute('class', 'todo-notes');
        const notesData = document.createElement('b');
        notesData.textContent = 'Notes: ';
        const notesText = document.createElement('span');
        notesText.textContent = textAreaValue;
        detailsData.appendChild(notesData);
        detailsData.appendChild(notesText);

        dataContainer.appendChild(detailsData);

        const todoStatus = document.createElement('div');
        todoStatus.setAttribute('class', 'todo-status');
        const todoData = document.createElement('p');
        todoData.setAttribute('class', 'todo-date');
        const dueDate = document.createElement('b');
        dueDate.textContent = 'Due Date: ';
        const timeDate = document.createElement('time');
        timeDate.textContent = dateValue;
        todoData.appendChild(dueDate);
        todoData.appendChild(timeDate);

        todoStatus.appendChild(todoData);

        const completionContainer = document.createElement('div');
        const boldLabel = document.createElement('b');
        const completionLabel = document.createElement('label');
        completionLabel.textContent = 'ToDo complete? ';
        completionLabel.setAttribute('for', `${textValue}${dateValue}`);

        boldLabel.appendChild(completionLabel);

        const checkCompletion = document.createElement('input');
        checkCompletion.setAttribute('type', 'checkbox');
        checkCompletion.setAttribute('class', 'todo-completion-status');
        checkCompletion.setAttribute('id', `${textValue}${dateValue}`);

        completionContainer.appendChild(boldLabel);
        completionContainer.appendChild(checkCompletion);

        todoStatus.appendChild(completionContainer);

        dataContainer.appendChild(todoStatus);

        const todoContainer = document.createElement('div');
        todoContainer.setAttribute('class', 'todo-item');
        todoContainer.setAttribute('id', todoKey);

        interfaceContainer.appendChild(detailsButton);
        interfaceContainer.appendChild(todoName);
        interfaceContainer.appendChild(removeTodo);

        todoContainer.appendChild(interfaceContainer);
        todoContainer.appendChild(dataContainer);

        return todoContainer;
    };

    return {
        makeTodo,
    };
}
