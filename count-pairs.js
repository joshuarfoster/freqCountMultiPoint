
function countPairs(arr, sum) {
    let numPairs = 0;
    const set = new Set();
    for (let num of arr){
        if(set.has(num)){
            numPairs ++;
        }else{
            let value = sum - num;
            set.add(value);
        }
    }
    return numPairs;
}

module.exports = countPairs