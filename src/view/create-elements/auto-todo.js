import StorageInterpreter from '../../model/local-storage/storage-interpreter';
import CreateTodoItem from './make-todo-item';
import DomCache from '../dom-cache';
import PubSub from 'pubsub-js';

export default function AutoTodo() {
    const initTodo = (set) => {
        set.forEach((todoKey) => {
            const todoData = StorageInterpreter().readUsingKey(todoKey);

            const todo = CreateTodoItem().makeTodo(
                todoData.textValue,
                todoData.categoryValue,
                todoData.dateValue,
                todoData.selectValue,
                todoData.textAreaValue,
                todoKey,
            );

            const todoContainer = DomCache().getTodoItems();

            todoContainer.prepend(todo);

            const dynamicTodoID = document.querySelector(`#${todoKey}`);

            if (dynamicTodoID.getAttribute('listener') !== 'true') {
                dynamicTodoID.setAttribute('listener', true);
                dynamicTodoID.addEventListener('click', (e) => {
                    PubSub.publish('TODO EVENT', { dynamicTodoID, e });
                });
            }
        });
    };

    return {
        initTodo,
    };
}
