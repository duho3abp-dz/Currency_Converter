import converter from './js/converter';

document.addEventListener('DOMContentLoaded', () => {

    converter({
        selectFromIdentifier: '[data-select-from]',
        selectToIdentifier: '[data-select-to]',
        inputFromIdentifier: '[data-input-from]',
        inputToIdentifier: '[data-input-to]'
    });

});