import cancelTodoSubmit from './cancel-todo';
import addTodoSubmit from './submit-todo';
import TodoData from './todo-data';
import SelectOption from '../../view/create-elements/select-option';
import StorageInterpreter from '../../model/local-storage/storage-interpreter';
import CategoryData from '../category-component/category-data';
import {
    toDoOptions,
    optionButtons,
    addTodoInputLabel,
    addTodoInputText,
    addTodoCategoryLabel,
    addTodoCategorySelect,
    addTodoDateLabel,
    addTodoInputDate,
    addTodoSelectLabel,
    addTodoSelectList,
    todoNotes,
    addTodoTextArea,
    todoNotesContainer,
    todoButtonContainer,
    submitTodo,
    cancelTodo,
    formTodoContainer,
} from './create-todo-elements';

const todoSelectID = TodoData().getCategorySelectId();
const categoryKey = CategoryData().getKey();

export default function addTodoInput() {
    toDoOptions.removeChild(optionButtons);
    formTodoContainer.appendChild(addTodoInputLabel);
    formTodoContainer.appendChild(addTodoInputText);
    formTodoContainer.appendChild(addTodoSelectLabel);
    formTodoContainer.appendChild(addTodoSelectList);
    formTodoContainer.appendChild(addTodoCategoryLabel);
    formTodoContainer.appendChild(addTodoCategorySelect);
    formTodoContainer.appendChild(addTodoDateLabel);
    formTodoContainer.appendChild(addTodoInputDate);

    todoNotesContainer.appendChild(todoNotes);
    todoNotesContainer.appendChild(addTodoTextArea);
    todoButtonContainer.appendChild(submitTodo);
    todoButtonContainer.appendChild(cancelTodo);
    formTodoContainer.appendChild(todoNotesContainer);
    formTodoContainer.appendChild(todoButtonContainer);

    toDoOptions.appendChild(formTodoContainer);

    SelectOption().initSelectWithOptions(
        new Set(StorageInterpreter().readUsingKey(categoryKey)),
        todoSelectID,
    );

    if (formTodoContainer.getAttribute('listener') !== 'true') {
        formTodoContainer.setAttribute('listener', true);

        formTodoContainer.addEventListener('submit', (e) => {
            e.preventDefault();
            addTodoSubmit(
                toDoOptions,
                optionButtons,
                addTodoInputText,
                addTodoCategorySelect,
                addTodoInputDate,
                addTodoSelectList,
                addTodoTextArea,
            );
        });
    }

    if (cancelTodo.getAttribute('listener') !== 'true') {
        cancelTodo.setAttribute('listener', true);
        cancelTodo.addEventListener('click', (e) => {
            e.preventDefault();
            cancelTodoSubmit(
                toDoOptions,
                optionButtons,
                addTodoInputText,
                addTodoCategorySelect,
                addTodoInputDate,
                addTodoSelectList,
                addTodoTextArea,
            );
        });
    }
}
