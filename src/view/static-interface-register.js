import DomCache from './dom-cache';
import PublishEvents from './publish-events';
import SubscribeEvents from './subscribe-events';
import addCategoryInput from '../controller/category-component/add-category';
import addTodoInput from '../controller/todo-component/add-todo';
import todoItemEvent from '../controller/todo-component/todo-item-event';
import StickyFilters from '../controller/filter-component/sticky-filters';

/*
 ** Execute logic after the DOM has loaded.
 */
addEventListener('load', () => {
    /*
     ** Publish event listeners VIA PubSubJS.
     */
    PublishEvents().setEventListenerPublication(
        DomCache().getAddCategory(),
        'click',
        'ADD CATEGORY',
        'Add or remove Category',
    );

    PublishEvents().setEventListenerPublication(
        DomCache().getAddToDo(),
        'click',
        'ADD TODO',
        'Add or remove Todo',
    );

    PublishEvents().setEventListenerPublication(
        DomCache().getCategoryFilter(),
        'change',
        'CATEGORY FILTER',
        DomCache().getCategoryFilter(),
    );

    PublishEvents().setEventListenerPublication(
        DomCache().getPriorityFilter(),
        'change',
        'PRIORITY FILTER',
        DomCache().getPriorityFilter(),
    );

    PublishEvents().setEventListenerPublication(
        DomCache().getDateFilter(),
        'change',
        'DATE FILTER',
        DomCache().getDateFilter(),
    );

    /*
     ** Subscribe to PubSubJS events.
     */
    SubscribeEvents().setSubscription('ADD CATEGORY', addCategoryInput);

    SubscribeEvents().setSubscription('ADD TODO', addTodoInput);

    SubscribeEvents().setSubscription('TODO EVENT', todoItemEvent);

    SubscribeEvents().setSubscription(
        'CATEGORY FILTER',
        StickyFilters().updateCategoryFilter,
    );

    SubscribeEvents().setSubscription(
        'PRIORITY FILTER',
        StickyFilters().updatePriorityFilter,
    );

    SubscribeEvents().setSubscription(
        'DATE FILTER',
        StickyFilters().updateDateFilter,
    );
});
