const fs = require('fs');
const syllable = require('syllable');

const dictString = fs.readFileSync('/usr/share/dict/words', 'utf8');
const dict = dictString.split('\n');
const dictLength = dict.length;

const chooseRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * dictLength) + 1;
  return {
    word: dict[randomIndex],
    count: syllable(dict[randomIndex]),
  };
};

const createLine = (syllableLength) => {
  const line = [];
  let syllableCount = 0;

  while (syllableCount < syllableLength) {
    const newWord = chooseRandomWord();

    if (newWord.count <= syllableLength && syllableCount + newWord.count <= syllableLength) {
      syllableCount += newWord.count;
      line.push(newWord.word);
    }
  }

  return line.join(' ');
};

console.log(createLine(5));
console.log(createLine(7));
console.log(createLine(5));
