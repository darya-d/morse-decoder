const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const numb11 = /11/g;
    const numb10 = /10/g;
    const numb0 = /00/g;
    // break the string into pieces of 10 digits
    let morseLine = expr.match(/.{1,10}/g);
    // our resulting array
    let morsePhrase = [];

    for (let i = 0; i < morseLine.length; i++) {
        let morseSymbol = morseLine[i];
        
        // replace numbers by symbols
        morseSymbol = morseSymbol
            .replace(numb0, '')
            .replace(numb10, '.')
            .replace(numb11, '-');

        // replace symbols by letters or spaces
        MORSE_TABLE[morseSymbol] ? morsePhrase.push(MORSE_TABLE[morseSymbol]) : morsePhrase.push(' ');
    }

    return morsePhrase.join('');
}

module.exports = {
    decode
}