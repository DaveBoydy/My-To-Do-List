import storeCategoryInput from "./store-category";
import cancelCategorySubmit from "./cancel-category";

export default function addCategorySubmit(
  toDoOptions,
  optionButtons,
  addCategoryInputText
) {
  const value = addCategoryInputText.value;
  storeCategoryInput(value);
  cancelCategorySubmit(toDoOptions, optionButtons, addCategoryInputText);
}
