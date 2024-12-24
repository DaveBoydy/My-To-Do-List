import DomCache from '../../view/dom-cache';

export const addCategoryInputLabel = document.createElement('label');
addCategoryInputLabel.textContent = 'Add/Remove Category:';
addCategoryInputLabel.setAttribute('for', 'add-remove-category-input');

export const addCategoryInputText = document.createElement('input');
addCategoryInputText.setAttribute('type', 'text');
addCategoryInputText.setAttribute('id', 'add-remove-category-input');
addCategoryInputText.setAttribute('placeholder', 'Enter a category name');

export const submitCategory = document.createElement('button');
submitCategory.textContent = 'Submit';
submitCategory.setAttribute('id', 'submit-category');

export const cancelCategory = document.createElement('button');
cancelCategory.textContent = 'Cancel';
cancelCategory.setAttribute('id', 'cancel-category');

export const categoryButtonContainer = document.createElement('div');
categoryButtonContainer.setAttribute('id', 'temp-category-buttons');

export const tempCategoryContainer = document.createElement('div');
tempCategoryContainer.setAttribute('id', 'temp-category-container');

export const toDoOptions = DomCache().getToDoOptions();
export const optionButtons = DomCache().getOptionButtons();
