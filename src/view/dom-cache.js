export default function DomCache() {
    const addCategory = document.querySelector('#add-remove-category');
    const addToDo = document.querySelector('#add-todo');
    const toDoOptions = document.querySelector('#todo-options');
    const optionButtons = document.querySelector('#option-buttons');
    const cancelCategory = document.querySelector('#cancel-category');

    const getAddCategory = () => addCategory;
    const getAddToDo = () => addToDo;
    const getToDoOptions = () => toDoOptions;
    const getOptionButtons = () => optionButtons;
    const getCancelCategory = () => cancelCategory;

    return {
        getAddCategory,
        getAddToDo,
        getToDoOptions,
        getOptionButtons,
        getCancelCategory,
    };
}
