


const logo = document.getElementById('logo');
const textWithoutDot = 'LIMA-DEV';
const tempo = 150;
let index = 0;
let blinkCount = 0;

function typeText() {
    if (index <= textWithoutDot.length) {
        logo.innerText = textWithoutDot.slice(0, index) + '.';
        index++;
        setTimeout(typeText, tempo);
    } else {
        setTimeout(blinkDot, 300);
    }
}

function blinkDot() {
    if (blinkCount < 6) {
        // Em vez de remover o ponto, trocamos por um espaço invisível (\u00A0)
        // Isso mantém a largura do elemento idêntica!
        if (logo.innerText === textWithoutDot + '.') {
            logo.innerText = textWithoutDot + '\u00A0'; 
        } else {
            logo.innerText = textWithoutDot + '.';
            blinkCount++;
        }
        setTimeout(blinkDot, 300);
    } else {
        blinkCount = 0;
        index = textWithoutDot.length;
        setTimeout(eraseText, 500);
    }
}

function eraseText() {
    if (index >= 0) {
        // Mantém o ponto durante o backspace para evitar o balanço
        logo.innerText = textWithoutDot.slice(0, index) + '.';
        index--;
        setTimeout(eraseText, tempo / 2);
    } else {
        logo.innerText = '\u00A0'; // Fica vazio mas mantém a altura
        setTimeout(restart, 2000);
    }
}

function restart() {
    index = 0;
    typeText();
}

typeText();