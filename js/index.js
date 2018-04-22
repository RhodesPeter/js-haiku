const fs = require('fs');
const syllable = require('syllable');
const postTweet = require('./twitter');

const dictString = fs.readFileSync('/usr/share/dict/words', 'utf8');
const dict = dictString.split('\n');
const dictLength = dict.length;

const chooseRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * dictLength) + 1;
  const randomWord = dict[randomIndex];
  return {
    word: randomWord,
    count: syllable(randomWord),
  };
};

const createLine = (syllableLength) => {
  const line = [];
  let syllableCount = 0;

  while (syllableCount < syllableLength) {
    const newWord = chooseRandomWord();

    if (syllableCount + newWord.count <= syllableLength) {
      syllableCount += newWord.count;
      line.push(newWord.word);
    }
  }

  return line.join(' ');
};

const constructHaiku = () => {
  const hashtags = '#javascript #haiku #poetry #俳句';
  const line1 = createLine(5);
  const line2 = createLine(7);
  const line3 = createLine(5);
  return `${line1}\n${line2}\n${line3}\n\n${hashtags}`;
};

const haiku = constructHaiku();
postTweet(haiku);
