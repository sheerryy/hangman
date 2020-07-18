const { createReadStream, writeFile } = require('fs');
const { createInterface } = require('readline');

const DICTIONARY_LENGTH = 30;

const dictionary = {
    easy: [],
    medium: [],
    hard: [],
    superHard: []
};

const incrementCharacter = (character) => {
    return String.fromCharCode(character.charCodeAt(0) + 1);
};

(async function processLineByLine() {
    try {
        const fileStream = createReadStream('words.txt');

        const rl = createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });


        let i = 1;
        let currentWord = 'a';
        // Note: we use the crlfDelay option to recognize all instances of CR LF
        // ('\r\n') in input.txt as a single line break.

        for await (const line of rl) {
            if (line.charAt(0) === currentWord) {
                if (line.charAt(1) === currentWord) {
                    continue;
                }


                if (line.length === 6) {
                    dictionary.easy = dictionary.easy.length !== (i * DICTIONARY_LENGTH) ? [...dictionary.easy, line] : dictionary.easy;
                }
                if (line.length >= 7 && line.length <= 9) {
                    dictionary.medium = dictionary.medium.length !== (i * DICTIONARY_LENGTH) ? [...dictionary.medium, line] : dictionary.medium;
                }
                if (line.length >= 10 && line.length <= 11) {
                    dictionary.hard = dictionary.hard.length !== (i * DICTIONARY_LENGTH) ? [...dictionary.hard, line] : dictionary.hard;
                }
                if (line.length >= 12) {
                    dictionary.superHard = dictionary.superHard.length !== (i * DICTIONARY_LENGTH) ? [...dictionary.superHard, line] : dictionary.superHard;
                }

                if (Object.keys(dictionary).every((difficulty) => dictionary[difficulty].length === (i * DICTIONARY_LENGTH))) {
                    i++;
                    currentWord = incrementCharacter(currentWord);
                }
                if (Object.keys(dictionary).every((difficulty) => dictionary[difficulty].length >= (26 * DICTIONARY_LENGTH))) {
                    // console.log(dictionary);
                    break;
                }
            }
        }

        console.log('File processed.');

        const data = JSON.stringify(dictionary, null, 2);

        writeFile('dictionary.json', data, (err) => {
            if (err) throw err;
            console.log('Data written to file');
        });
    } catch (err) {
        console.error(err);
    }
})();
