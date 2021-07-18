// Set(4) {1, 2, 3, 4} //removes duplicates

'ref' //removes duplicates, then converts to array via destruc then converts back to string with .join()

//map m contains 2 key-value pairs. The keys are both [1, 2, 3] while the values are true and false. 

function hasDuplicate(arr) {
    const oldArr = [...arr]
    if (oldArr.length === [...new Set(arr)].length) {
        return false;
    } else {
        return true;
    }
}

function vowelCount(str) {
    const vowelMap = new Map();
    str = removeConsonants(str)
    for (let char of str) {
        if (!vowelMap.has(char)) {
            vowelMap.set(char, 1)
        } else {
            vowelMap.set(char, vowelMap.get(char) + 1)
        }
    }
    return vowelMap;
}

function removeConsonants(str) {
    const vowels = 'aeiou';
    const lowerCaseStr = str.toLowerCase();
    const strArr = lowerCaseStr.split('')
    for (let i = 0; i < strArr.length; i++) {
        if (vowels.indexOf(strArr[i]) === -1) {
            strArr.splice(i, 1);
            i--;
        }
    }
    return strArr.join('');
}