'use strict';

import { postData } from './services/services';

const converter = ({
    selectFromIdentifier,
    selectToIdentifier,
    inputFromIdentifier,
    inputToIdentifier
}) => {
    const selectFrom = document.querySelector(selectFromIdentifier);
    const selectTo = document.querySelector(selectToIdentifier);
    const inputFrom = document.querySelector(inputFromIdentifier);
    const inputTo = document.querySelector(inputToIdentifier);

    if ( !selectFrom || !selectTo || !inputFrom || !inputTo ) return ;

    const data = {
        quantity: null,
        valute: selectFrom.value
    };

    let rate = 0;

    const calculationValue = () => +rate * +data.quantity;

    const checkСurrency = props => {
        for (let key in props) {
            if ( key === selectTo.value ) {
                rate = props[key].Value
                break
            }
        }
        inputTo.value = calculationValue().toFixed(4);
    };

    const request = () => {
        postData(data)
        .then(props => {// получаем объект с данными по курсам
            // checkСurrency(props);

            // ------------------- тестовый ответ
            const prop = {
                "Valute": {
                    "USD": {
                        "ID": "R01235",
                        "NumCode": "840",
                        "CharCode": "USD",
                        "Nominal": 1,
                        "Name": "Доллар США",
                        "Value": 73.8757,
                        "Previous": 73.8757
                    },
                    "EUR": {
                        "ID": "R01239",
                        "NumCode": "978",
                        "CharCode": "EUR",
                        "Nominal": 1,
                        "Name": "Евро",
                        "Value": 90.7932,
                        "Previous": 90.6824
                    }
                }
            }
            checkСurrency(prop.Valute);
            // ------------------- тестовый ответ
        });
    };

    const inputEvent = e => {
        e.target.value = e.target.value.replace(/\D/ig, '');
        if ( e.target.value === data.quantity ) return;

        data.quantity = e.target.value;
        request();
    };

    const changeEvent = e => request();

    inputFrom.addEventListener('input', inputEvent);
    selectFrom.addEventListener('change', changeEvent);
    selectTo.addEventListener('change', changeEvent);
};

export default converter;