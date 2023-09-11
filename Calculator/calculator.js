const inputField = document.querySelector('.number');
const calculatorButtons = document.querySelectorAll('.cal_btn, .cal_btn_clear, .cal_btn_erase, .cal_ops_div, .cal_ops_add, .cal_ops_sub, .cal_ops_equal');

calculatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;

        switch (buttonValue) {
            case 'C':
                inputField.value = '';
                break;
            case '<':
                inputField.value = inputField.value.slice(0, -1);
                break;
            case '/':
            case '%':
            case '-':
            case '*':
            case "+":
                inputField.value += buttonValue;
                break;
            case '=':
                try {
                    inputField.value = eval(inputField.value);
                } catch (error) {
                    inputField.value = 'Error';
                }
                break;
            default:
                inputField.value += buttonValue;
        }
    });
});
