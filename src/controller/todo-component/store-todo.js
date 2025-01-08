import TodoData from './todo-data';
import StorageInterpreter from '../../model/local-storage/storage-interpreter';

const todoKey = TodoData().getKey();

export default function StoreTodoKey() {
    const todoSet = new Set(StorageInterpreter().readUsingKey(todoKey));

    const addTodo = (key) => {
        todoSet.add(key);
        StorageInterpreter().setStorage(todoKey, [...todoSet]);
    };

    const deleteTodo = (key) => {
        todoSet.delete(key);
        StorageInterpreter().setStorage(todoKey, [...todoSet]);
    };

    return {
        addTodo,
        deleteTodo,
    };
}
