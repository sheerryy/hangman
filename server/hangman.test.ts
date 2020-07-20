import {
    getWord,
    getHint,
    checkCharacter
} from "./hangman.service";

describe('Hangman Service Tests', function () {
    it('getWord() validation', async function () {
        const {word, characterMap, misses, originalWord} = await getWord("easy")

        expect(word).not.toBeNull();
        expect(characterMap).not.toBeNull();
        expect(originalWord).not.toBeNull();
        expect(misses).toStrictEqual([]);
    });

    it('getHint() validation', async function () {
        const characterMap: any = {
            'A': 1,
            'B': 0,
            'C': 0,
        };

        const hint = getHint(characterMap);

        expect(hint).toStrictEqual('B');
    });

    it('checkCharacter() validation if guess is right', async function () {
        let characterMapMock: any = {
            'A': 0,
            'E': 1,
            'G': 0,
            'M': 1,
        };
        let wordMock = '__ME';
        const originalWordMock = 'GAME';
        const characterMock = 'G';

        const {
            correct,
            word,
            wordComplete,
            characterMap,
            misses,
        } = checkCharacter(characterMock, characterMapMock, wordMock, originalWordMock, []);

        wordMock = 'G_ME';
        characterMapMock = { ...characterMap, 'G': 1 };

        expect(correct).toStrictEqual(true);
        expect(word).toStrictEqual(wordMock);
        expect(wordComplete).toStrictEqual(false);
        expect(characterMap).toStrictEqual(characterMapMock);
        expect(misses).toStrictEqual([]);
    });

    it('checkCharacter() validation if guess is right and is complete', async function () {
        let characterMapMock: any = {
            'A': 1,
            'E': 0,
            'G': 1,
            'M': 1,
        };
        let wordMock = 'GAM_';
        const originalWordMock = 'GAME';
        const characterMock = 'E';

        const {
            correct,
            word,
            wordComplete,
            characterMap,
            misses,
        } = checkCharacter(characterMock, characterMapMock, wordMock, originalWordMock, []);

        wordMock = 'GAME';
        characterMapMock = { ...characterMap, 'E': 1 };

        expect(correct).toStrictEqual(true);
        expect(word).toStrictEqual(wordMock);
        expect(wordComplete).toStrictEqual(true);
        expect(characterMap).toStrictEqual(characterMapMock);
        expect(misses).toStrictEqual([]);
    });

    it('checkCharacter() validation if guess is wrong', async function () {
        const characterMapMock: any = {
            'A': 0,
            'E': 1,
            'G': 0,
            'M': 1,
        };
        const wordMock = '__ME';
        const originalWordMock = 'GAME';
        const characterMock = 'T';

        const {
            correct,
            word,
            wordComplete,
            characterMap,
            misses,
        } = checkCharacter(characterMock, characterMapMock, wordMock, originalWordMock, []);


        expect(correct).toStrictEqual(false);
        expect(word).toStrictEqual(wordMock);
        expect(wordComplete).toStrictEqual(false);
        expect(characterMap).toStrictEqual(characterMapMock);
        expect(misses).toStrictEqual(['T']);
    });
});
