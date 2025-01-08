import StorageInterpreter from '../../model/local-storage/storage-interpreter';

export default function TodoData() {
    const TODO_KEY = 'todo data';
    const TODO_CATEGORY_SELECT_ID = '#add-todo-category-label';
    let todoSet = null;

    StorageInterpreter().searchKeyExists(TODO_KEY)
        ? (todoSet = new Set(StorageInterpreter().readUsingKey(TODO_KEY)))
        : (todoSet = new Set());

    const getSet = () => todoSet;
    const getKey = () => TODO_KEY;
    const getCategorySelectId = () => TODO_CATEGORY_SELECT_ID;

    return {
        getSet,
        getKey,
        getCategorySelectId,
    };
}
