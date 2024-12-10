import CategoryData from "../controller/category-component/category-data";
import StorageInterpreter from "./local-storage/storage-interpreter";
import SelectOption from "../controller/create-elements/select-option";

const categoryKey = CategoryData().getKey();
const categoryID = "#category-filter";

/*
 ** Init UI with persistent storage data.
 */
export default function initDataRegister() {
  StorageInterpreter().setStorage(categoryKey, [...CategoryData().getSet()]);

  SelectOption().initSelectWithOptions(
    new Set(StorageInterpreter().readUsingKey(categoryKey)),
    categoryID
  );
}
