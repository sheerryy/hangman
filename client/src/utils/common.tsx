const getAlphabetMap = () => {
    let alphabetMap = {};

    for (let i = 0; i < 26; ++i) {
        alphabetMap = {...alphabetMap, [String.fromCharCode(65 + i)]: 0}
    }

    return alphabetMap;
};

export {
    getAlphabetMap,
}
