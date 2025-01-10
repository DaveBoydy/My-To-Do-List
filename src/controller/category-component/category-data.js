import StorageInterpreter from '../../model/local-storage/storage-interpreter';

export default function categoryData() {
    const CATEGORY_KEY = 'category data';
    const CATEGORY_ID = '#category-filter';
    let categorySet = null;

    StorageInterpreter().searchKeyExists(CATEGORY_KEY)
        ? (categorySet = new Set(
              StorageInterpreter().readUsingKey(CATEGORY_KEY),
          ))
        : (categorySet = new Set());

    const getSet = () => categorySet;
    const getKey = () => CATEGORY_KEY;
    const getID = () => CATEGORY_ID;

    return {
        getSet,
        getKey,
        getID,
    };
}
