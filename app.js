
const diccionarioMorse = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----', ' ': '/'
};

const textoAMorse = (text) => {
    return text.toUpperCase().split('').map(char => diccionarioMorse[char] || '').join(' ');
};

const morseToText = (morse) => {
    const morseToTextMap = Object.entries(diccionarioMorse).reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
    }, {});
    return morse.split(' ').map(code => morseToTextMap[code] || '').join('');
};

function convert() {
    const input = document.getElementById("inputText").value;
    const mode = document.getElementById("mode").value;
    let resultado = '';

    if (mode === 'textoAMorse') {
        resultado = textoAMorse(input);
    } else if (mode === 'morseToText') {
        resultado = morseToText(input);
    }

    document.getElementById("output").innerText = resultado;
}
