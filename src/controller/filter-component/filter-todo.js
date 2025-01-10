import StickyFilters from './sticky-filters';
import { isSameDay, isSameWeek, isSameMonth, format } from 'date-fns';

export default function filterTodo(todo) {
    let activeCategory = false;
    let activePriority = false;
    let activeDate = false;

    if (StickyFilters().getActiveCategory() === 'all-categories') {
        activeCategory = true;
    }

    if (StickyFilters().getActiveCategory() === todo.category) {
        activeCategory = true;
    }

    if (StickyFilters().getActivePriority() === 'all-priorities') {
        activePriority = true;
    }

    if (StickyFilters().getActivePriority() === todo.priority) {
        activePriority = true;
    }

    if (StickyFilters().getActiveDate() === 'all-dates') {
        activeDate = true;
    }

    if (StickyFilters().getActiveDate() === 'today') {
        activeDate = isSameDay(format(new Date(), 'yyyy/MM/dd'), todo.date);
    }

    if (StickyFilters().getActiveDate() === 'this-week') {
        activeDate = isSameWeek(format(new Date(), 'yyyy/MM/dd'), todo.date);
    }

    if (StickyFilters().getActiveDate() === 'this-month') {
        activeDate = isSameMonth(format(new Date(), 'yyyy/MM/dd'), todo.date);
    }

    return activeCategory && activePriority && activeDate;
}
