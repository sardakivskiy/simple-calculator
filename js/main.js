const NUMBER1 = document.querySelector('.js-input1');
const NUMBER2 = document.querySelector('.js-input2');
const SELECTOR_OPERATION = document.querySelector('.js-select-operation');
const BTN_RESULT = document.querySelector('.js-result');
const OUTPUT = document.querySelector('.js-output');

BTN_RESULT.addEventListener('click', function() {
    const num1 = Number(NUMBER1.value);
    const num2 = Number(NUMBER2.value);
    const operation = SELECTOR_OPERATION.value;

    OUTPUT.innerHTML = calculate({ num1, num2, operation });
});