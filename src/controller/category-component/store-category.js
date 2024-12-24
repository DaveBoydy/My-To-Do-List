import CategoryData from './category-data';
import StorageInterpreter from '../../model/local-storage/storage-interpreter';
import SelectOption from '../../view/create-elements/select-option';

const categoryKey = CategoryData().getKey();
const categoryID = CategoryData().getID();

export default function storeCategoryInput(value) {
    if (
        value === 'All Categories' ||
        value === 'Work' ||
        value === 'Study' ||
        value === 'House' ||
        value === ''
    )
        return;

    const categorySet = new Set(StorageInterpreter().readUsingKey(categoryKey));

    if (categorySet.has(value)) {
        categorySet.delete(value);
        SelectOption().removeOption(value, categoryID);
        StorageInterpreter().setStorage(categoryKey, [...categorySet]);
    } else {
        categorySet.add(value);
        SelectOption().addOption(value, categoryID);
        StorageInterpreter().setStorage(categoryKey, [...categorySet]);
    }
}
