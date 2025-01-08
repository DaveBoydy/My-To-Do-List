export default function DomCache() {
    const addCategory = document.querySelector('#add-remove-category');
    const addToDo = document.querySelector('#add-todo');
    const toDoOptions = document.querySelector('#todo-options');
    const optionButtons = document.querySelector('#option-buttons');
    const cancelCategory = document.querySelector('#cancel-category');
    const completionStatus = document.querySelector('#completion-status');
    const todoItems = document.querySelector('.todo-items');
    const todoDetails = document.querySelector('.todo-details');

    const getAddCategory = () => addCategory;
    const getAddToDo = () => addToDo;
    const getToDoOptions = () => toDoOptions;
    const getOptionButtons = () => optionButtons;
    const getCancelCategory = () => cancelCategory;
    const getCompletionStatus = () => completionStatus;
    const getTodoItems = () => todoItems;
    const getTodoDetails = () => todoDetails;

    return {
        getAddCategory,
        getAddToDo,
        getToDoOptions,
        getOptionButtons,
        getCancelCategory,
        getCompletionStatus,
        getTodoItems,
        getTodoDetails,
    };
}
