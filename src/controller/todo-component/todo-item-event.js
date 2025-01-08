import StorageInterpreter from '../../model/local-storage/storage-interpreter';
import StoreTodoKey from './store-todo';

export default function todoItemEvent(msg, data) {
    if (data.e.target.className === 'todo-details') {
        const todoDataElement = data.dynamicTodoID.childNodes[1];
        todoDataElement.classList.toggle('show-details');
    }

    if (data.e.target.className === 'todo-completion-status') {
        const todoDataElement = data.dynamicTodoID.childNodes[0];
        todoDataElement.classList.toggle('p-completed');
    }

    if (data.e.target.className === 'remove-todo') {
        StoreTodoKey().deleteTodo(data.dynamicTodoID.id);
        StorageInterpreter().deleteUsingKey(data.dynamicTodoID.id);
        data.dynamicTodoID.remove();
    }
}
