export default function SelectOption() {
    const initSelectWithOptions = (set, elementID) => {
        set.forEach((option) => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.textContent = option;
            document.querySelector(elementID).append(opt);
        });
    };

    const addOption = (option, elementID) => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        document.querySelector(elementID).append(opt);
    };

    const removeOption = (option, elementID) => {
        let select = document.querySelector(elementID);

        for (let i = 0, n = select.options.length; i < n; i++) {
            if (select.options[i].value === option) select.remove(i);
        }
    };

    const setFilterSelectedOption = (option, elementID) => {
        let select = document.querySelector(`#${elementID}`);

        for (let i = 0, n = select.options.length; i < n; i++) {
            if (select.options[i].value === option) {
                select.options[i].setAttribute('selected', 'selected');
            }
        }
    };

    return {
        initSelectWithOptions,
        addOption,
        removeOption,
        setFilterSelectedOption,
    };
}
