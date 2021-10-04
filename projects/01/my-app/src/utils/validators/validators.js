export const required = value => {
    if(value) return undefined;
    return "Field is required"
}

/* Это функция которая создает функции, получается что когда вызвется эта функция, она сначала создаст валидатор а
потом применит его */
export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}