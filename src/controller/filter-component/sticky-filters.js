import FilterData from './filter-data';
import DomCache from '../../view/dom-cache';

export default function StickyFilters() {
    const categoryFilter = DomCache().getCategoryFilter();
    const priorityFilter = DomCache().getPriorityFilter();
    const dateFilter = DomCache().getDateFilter();

    let activeCategory = 'all-categories';
    let activePriority = 'all-priorities';
    let activeDate = 'all-dates';

    if (sessionStorage.getItem(FilterData().getCategoryFilterKey()) !== null)
        activeCategory = sessionStorage.getItem(
            FilterData().getCategoryFilterKey(),
        );

    if (sessionStorage.getItem(FilterData().getPriorityFilterKey()) !== null)
        activePriority = sessionStorage.getItem(
            FilterData().getPriorityFilterKey(),
        );

    if (sessionStorage.getItem(FilterData().getDateFilterKey()) !== null)
        activeDate = sessionStorage.getItem(FilterData().getDateFilterKey());

    const updateCategoryFilter = () => {
        activeCategory =
            categoryFilter.options[categoryFilter.selectedIndex].value;
        sessionStorage.setItem(
            FilterData().getCategoryFilterKey(),
            activeCategory,
        );
        location.reload();
    };

    const updatePriorityFilter = () => {
        activePriority =
            priorityFilter.options[priorityFilter.selectedIndex].value;
        sessionStorage.setItem(
            FilterData().getPriorityFilterKey(),
            activePriority,
        );
        location.reload();
    };

    const updateDateFilter = () => {
        activeDate = dateFilter.options[dateFilter.selectedIndex].value;
        sessionStorage.setItem(FilterData().getDateFilterKey(), activeDate);
        location.reload();
    };

    const getActiveDate = () => {
        return activeDate;
    };

    const getDateFilter = () => {
        return dateFilter;
    };

    const getActivePriority = () => {
        return activePriority;
    };

    const getPriorityFilter = () => {
        return priorityFilter;
    };

    const getActiveCategory = () => {
        return activeCategory;
    };

    const getCategoryFilter = () => {
        return categoryFilter;
    };

    return {
        updateCategoryFilter,
        updatePriorityFilter,
        updateDateFilter,
        getActiveDate,
        getActivePriority,
        getActiveCategory,
        getDateFilter,
        getPriorityFilter,
        getCategoryFilter,
    };
}
