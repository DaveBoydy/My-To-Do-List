import cancelCategorySubmit from "./cancel-category";
import addCategorySubmit from "./submit-category";
import {
  addCategoryInputLabel,
  addCategoryInputText,
  submitCategory,
  cancelCategory,
  categoryButtonContainer,
  tempCategoryContainer,
  toDoOptions,
  optionButtons,
} from "./create-category-elements";

export default function addCategoryInput() {
  toDoOptions.removeChild(optionButtons);
  tempCategoryContainer.appendChild(addCategoryInputLabel);
  tempCategoryContainer.appendChild(addCategoryInputText);
  categoryButtonContainer.appendChild(submitCategory);
  categoryButtonContainer.appendChild(cancelCategory);
  tempCategoryContainer.appendChild(categoryButtonContainer);
  toDoOptions.appendChild(tempCategoryContainer);

  if (submitCategory.getAttribute("listener") !== "true") {
    submitCategory.setAttribute("listener", true);
    submitCategory.addEventListener("click", () =>
      addCategorySubmit(toDoOptions, optionButtons, addCategoryInputText)
    );
  }

  if (cancelCategory.getAttribute("listener") !== "true") {
    cancelCategory.setAttribute("listener", true);
    cancelCategory.addEventListener("click", () =>
      cancelCategorySubmit(toDoOptions, optionButtons, addCategoryInputText)
    );
  }
}
