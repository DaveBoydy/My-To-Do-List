import cancelTodoSubmit from './cancel-todo';
import generateTodo from './generate-todo';

export default function addTodoSubmit(
    toDoOptions,
    optionButtons,
    addTodoInputText,
    addTodoCategorySelect,
    addTodoInputDate,
    addTodoSelectList,
    addTodoTextArea,
) {
    const textValue = addTodoInputText.value;
    const categoryValue = addTodoCategorySelect.value;
    const dateValue = addTodoInputDate.value;
    const selectValue = addTodoSelectList.value;
    const textAreaValue = addTodoTextArea.value;

    generateTodo(
        textValue,
        categoryValue,
        dateValue,
        selectValue,
        textAreaValue,
    );

    cancelTodoSubmit(
        toDoOptions,
        optionButtons,
        addTodoInputText,
        addTodoCategorySelect,
        addTodoInputDate,
        addTodoSelectList,
        addTodoTextArea,
    );
}
