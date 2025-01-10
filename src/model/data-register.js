import CategoryData from '../controller/category-component/category-data';
import TodoData from '../controller/todo-component/todo-data';
import StorageInterpreter from './local-storage/storage-interpreter';
import SelectOption from '../view/create-elements/select-option';
import AutoTodo from '../view/create-elements/auto-todo';
import StickyFilters from '../controller/filter-component/sticky-filters';

const categoryKey = CategoryData().getKey();
const categoryID = CategoryData().getID();

const todoKey = TodoData().getKey();

/*
 ** Init UI with persistent storage data.
 */
export default function initDataRegister() {
    StorageInterpreter().setStorage(categoryKey, [...CategoryData().getSet()]);
    StorageInterpreter().setStorage(todoKey, [...TodoData().getSet()]);

    SelectOption().initSelectWithOptions(
        new Set(StorageInterpreter().readUsingKey(categoryKey)),
        categoryID,
    );

    AutoTodo().initTodo(new Set(StorageInterpreter().readUsingKey(todoKey)));

    SelectOption().setFilterSelectedOption(
        StickyFilters().getActiveCategory(),
        StickyFilters().getCategoryFilter().id,
    );
    SelectOption().setFilterSelectedOption(
        StickyFilters().getActivePriority(),
        StickyFilters().getPriorityFilter().id,
    );
    SelectOption().setFilterSelectedOption(
        StickyFilters().getActiveDate(),
        StickyFilters().getDateFilter().id,
    );
}
