const resultInput = document.getElementById('resultInput');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        switch (value) {
            case '=':
                try {
                    currentInput = eval(currentInput).toString();
                } catch {
                    currentInput = 'Erro';
                }
                break;
            case 'C':
                currentInput = '';
                break;
            case '←':
                currentInput = currentInput.slice(0, -1);
                break;
            default:
                currentInput += value;
        }

        resultInput.value = currentInput;
    });
});
