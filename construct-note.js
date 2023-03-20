
function makeFreqCounter (string) {
    const freqCounter = {};
    for(let char of string){
        freqCounter[char] = (freqCounter[char] + 1) || 1;
    }
    return freqCounter
}

function constructNote(msg, str) {
    const msgFreqCounter = makeFreqCounter(msg);
    const strFreqCounter = makeFreqCounter(str);
    for (let key in msgFreqCounter){
        if(!strFreqCounter[key]) return false;
        if(strFreqCounter[key] < msgFreqCounter[key]) return false;
    }
    return true;
}

module.exports = constructNote