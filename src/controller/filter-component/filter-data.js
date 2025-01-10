export default function FilterData() {
    const CATEGORY_FILTER_KEY = 'category filter';
    const PRIORITY_FILTER_KEY = 'priority filter';
    const DATES_FILTER_KEY = 'dates filter';

    const getCategoryFilterKey = () => CATEGORY_FILTER_KEY;
    const getPriorityFilterKey = () => PRIORITY_FILTER_KEY;
    const getDateFilterKey = () => DATES_FILTER_KEY;

    return {
        getCategoryFilterKey,
        getPriorityFilterKey,
        getDateFilterKey,
    };
}
