
function makeFreqCounter (str) {
    const freqCounter = {};
    for(let dig of str){
        freqCounter[dig] = (freqCounter[dig] + 1) || 1;
    }
    return freqCounter
}

function sameFrequency(num1, num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();
    if(str1.length !== str2.length) return false;
    const num1FreqCounter = makeFreqCounter(str1);
    const num2FreqCounter = makeFreqCounter(str2);
    for (let key in num1FreqCounter){
        if(!num2FreqCounter[key]) return false;
        if(num1FreqCounter[key] !== num2FreqCounter[key]) return false;
    }
    return true
}

module.exports = sameFrequency