import { houseOption, studyOption, workOption } from './create-todo-elements';

export default function cancelTodoSubmit(
    toDoOptions,
    optionButtons,
    addTodoInputText,
    addTodoCategorySelect,
    addTodoInputDate,
    addTodoSelectList,
    addTodoTextArea,
) {
    addTodoInputText.value = null;
    addTodoCategorySelect.value = 'Work';
    addTodoInputDate.value = null;
    addTodoSelectList.value = 'p-low';
    addTodoTextArea.value = null;

    toDoOptions.lastChild.childNodes[5].textContent = null;
    toDoOptions.lastChild.childNodes[5].appendChild(workOption);
    toDoOptions.lastChild.childNodes[5].appendChild(studyOption);
    toDoOptions.lastChild.childNodes[5].appendChild(houseOption);

    toDoOptions.removeChild(toDoOptions.lastChild);
    toDoOptions.appendChild(optionButtons);
}
