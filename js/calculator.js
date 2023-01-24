const OPERATION = {
    sum: '+',
    substract: '-',
    multiply: '*',
    divison: '/',
};

function calculate({ num1, num2, operation }) {
    let result = null;

    switch (operation) {
        case OPERATION.sum:
            result = sum(num1, num2);
            break;
        case OPERATION.substract:
            result = substract(num1, num2);
            break;
        case OPERATION.multiply:
            result = multiply(num1, num2);
            break;
        case OPERATION.divison:
            result = divison(num1, num2);
            break;
        default:
            break;
    }

    return result;
}