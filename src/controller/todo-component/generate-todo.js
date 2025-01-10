import CreateTodoItem from '../../view/create-elements/make-todo-item';
import DomCache from '../../view/dom-cache';
import PubSub from 'pubsub-js';
import StorageInterpreter from '../../model/local-storage/storage-interpreter';
import StoreTodoKey from './store-todo';
import { format } from 'date-fns';

export default function generateTodo(
    textValue,
    categoryValue,
    dateValue,
    selectValue,
    textAreaValue,
) {
    // dateValue === ''
    //     ? (dateValue = format(new Date(), 'dd/MM/yyyy'))
    //     : (dateValue = format(dateValue, 'dd/MM/yyyy'));

    dateValue === ''
        ? (dateValue = format(new Date(), 'yyyy/MM/dd'))
        : (dateValue = format(dateValue, 'yyyy/MM/dd'));

    const uuid = crypto.randomUUID();
    const todoKey = `${textValue}${uuid}`;

    const todo = CreateTodoItem().makeTodo(
        textValue,
        categoryValue,
        dateValue,
        selectValue,
        textAreaValue,
        todoKey,
    );

    const todoContainer = DomCache().getTodoItems();

    todoContainer.prepend(todo);

    const dynamicTodoID = document.querySelector(`#${textValue}${uuid}`);

    if (dynamicTodoID.getAttribute('listener') !== 'true') {
        dynamicTodoID.setAttribute('listener', true);
        dynamicTodoID.addEventListener('click', (e) => {
            PubSub.publish('TODO EVENT', { dynamicTodoID, e });
        });
    }

    StorageInterpreter().setStorage(todoKey, {
        textValue,
        categoryValue,
        dateValue,
        selectValue,
        textAreaValue,
    });

    StoreTodoKey().addTodo(todoKey);
}
