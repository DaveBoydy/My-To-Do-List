import StorageInterpreter from "../../model/local-storage/storage-interpreter";

export default function categoryData() {
  const categoryKey = "category data";
  const categoryID = "#category-filter";
  let categorySet = null;

  StorageInterpreter().searchKeyExists(categoryKey)
    ? (categorySet = new Set(StorageInterpreter().readUsingKey(categoryKey)))
    : (categorySet = new Set());

  const getSet = () => categorySet;
  const getKey = () => categoryKey;
  const getID = () => categoryID;
  const setSet = (set) => {
    categorySet = set;
  };

  return {
    getSet,
    getKey,
    getID,
    setSet,
  };
}
