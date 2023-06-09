const buttonTask5Node = document.getElementById('task5');
const textNode = document.getElementById('text');
const sumMessage = 'Введите кол-во денюжек(число больше нуля)';
const moneyMessage = 'Введите валюту для конвертации';
const moneyCurrency = ['USD', 'EUR', 'KZT', 'AED'];

const getValueFromUser = () => {
    let valueRub = null;
    while (!Number.isInteger(valueRub) || valueRub <= 0) {
        valueRub = parseInt(prompt(sumMessage));
    };
    return valueRub;
};

const getMoneyTypeFromUser = () => {
    let currency = null;
    while (!currency || !moneyCurrency.includes(currency)) {
        currency = prompt(moneyMessage, moneyCurrency);
    };
    return currency;
};

const convertRub = (valueRub, currency) => {
    let valueCurrency = null;
    valueCurrency = valueRub * 100;
    switch (currency) {
        case moneyCurrency[0]:
            valueCurrency = valueCurrency / 80.69;
            break;
        case moneyCurrency[1]:
            valueCurrency = valueCurrency / 86.51;
            break;
        case moneyCurrency[2]:
            valueCurrency = valueCurrency / 0.1815;
            break;
        case moneyCurrency[3]:
            valueCurrency = valueCurrency / 21.8;
            break;
    };
    valueCurrency = Math.round(valueCurrency);
    valueCurrency = valueCurrency / 100;
    return valueCurrency;
};

const render = (valueRub, currency, valueCurrency) => {
    textNode.innerText = `${valueRub} RUB - это ${valueCurrency} ${currency}`
};

const buttonHandler = () => {
    console.log(moneyCurrency)
    let valueRub = getValueFromUser();
    let currency = getMoneyTypeFromUser();
    let valueCurrency = convertRub(valueRub, currency);
    render(valueRub, currency, valueCurrency);
};

buttonTask5Node.addEventListener('click', buttonHandler);