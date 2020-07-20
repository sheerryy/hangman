const {readFile} = require('fs');
const {promisify} = require('util');

const readDictionary = promisify(readFile);

const getRandomIndex = (max: number): number => Math.floor(Math.random() * Math.floor(max));

const getWord = async (difficulty: 'easy' | 'medium' | 'hard' | 'superHard'):
    Promise<{ originalWord: string, misses: string[], word: string, characterMap: any }> => {
    const dictionaryData = await readDictionary('dictionary.json');
    const dictionary = JSON.parse(dictionaryData);

    const originalWord = dictionary[difficulty][getRandomIndex(dictionary[difficulty].length)].toUpperCase();
    let characterMap = {};
    [...originalWord].forEach((character) => {
        characterMap = {...characterMap, [character]: 0};
    });

    const word = originalWord.replace(/([A-Z])/g, '_');

    return {
        originalWord,
        misses: [],
        word,
        characterMap,
    }
};

const checkCharacter = (character: string, characterMap: any, word: string, originalWord: string, misses = []):
{ correct: boolean, wordComplete: boolean, misses: string[], characterMap: any, word: string }=> {
    const objectKeys: string[] = Object.keys(characterMap);
    let correct = false;
    let wordComplete = false;

    if (objectKeys.includes(character)) {
        characterMap = {...characterMap, [character]: 1};

        correct = true;

        if (objectKeys.every((key) => characterMap[key])) {
            wordComplete = true;
        }

        let regularExpressionString: string = '';
        Object.keys(characterMap).filter((char) => characterMap[char]).forEach((char, index) => {
            regularExpressionString = `${regularExpressionString}^${char}+${index === (objectKeys.length - 1) ? '|' : ''}`;
        });
        const regularExpression: RegExp = new RegExp(`[${regularExpressionString}]`, 'g');
        word = originalWord.replace(regularExpression, '_');
    } else {
        misses = [...misses, character]
    }

    return {
        misses,
        word,
        characterMap,
        correct,
        wordComplete,
    }
};

const getHint = (characterMap): string => Object.keys(characterMap).filter((char) => !characterMap[char])[0];

export {
    getWord,
    getHint,
    getRandomIndex,
    checkCharacter,
}
