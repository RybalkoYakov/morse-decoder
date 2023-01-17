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
    const letters = []
    const lettersDecoded = []

    for (let i = 0; i < expr.length; i++) {
        if ((i + 1) % 10 === 0) {
            let letterEncoded = expr.slice(i - 9, i + 1);
            const dot = /10/g;
            const dash = /11/g;
            const startZeros = /^0+/;
            const space = /\*\*\*\*\*\*\*\*\*\*/;

            letterEncoded = letterEncoded.replace(startZeros, '');
            letterEncoded = letterEncoded.replace(dot, '.');
            letterEncoded = letterEncoded.replace(dash, '-');
            letterEncoded = letterEncoded.replace(space, ' ');

            letters.push(letterEncoded);
        }
    }

    letters.forEach(value =>{
        if  (value === ' ') {
            lettersDecoded.push(value)
        }
          Object.keys(MORSE_TABLE).forEach(key => {
              if (key === value) {
                  lettersDecoded.push(MORSE_TABLE[value])
              }
          })
      }
    )

    return lettersDecoded.join('');
}

module.exports = {
    decode
}