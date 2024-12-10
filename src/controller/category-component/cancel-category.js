export default function cancelCategorySubmit(
  toDoOptions,
  optionButtons,
  addCategoryInputText
) {
  addCategoryInputText.value = null;
  toDoOptions.removeChild(toDoOptions.lastChild);
  toDoOptions.appendChild(optionButtons);
}
