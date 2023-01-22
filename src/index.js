const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const morseArr = Object.entries(MORSE_TABLE);
  const symbols = [];
  const keys = [];
  let index = 0;
  let string = "";
  let result = "";

  for (let i = 0; i < morseArr.length; i++) {
    symbols.push(morseArr[i][1]);
    keys.push(morseArr[i][0]);
  }

  for (let i = 0; i < keys.length; i++) {
    for (let j = 0; j < keys[i].length; j++) {
      if (keys[i][j] === ".") {
        string += "10";
      } else {
        string += "11";
      }
    }
    while (string.length < 10) {
      string = "0" + string;
    }
    keys[i] = string;
    string = "";
  }

  symbols.push(" ");
  keys.push("**********");
  for (let i = 0; i < expr.length; i += 10) {
    index = keys.indexOf(expr.slice(i, i + 10));
    result += symbols[index];
  }
  return result;
}

module.exports = {
  decode,
};
