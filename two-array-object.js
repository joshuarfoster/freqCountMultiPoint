
function twoArrayObject(keys, vals) {
    const obj = {};
    let i = 0;
    while(i < keys.length){
        if(i < vals.length){
            obj[keys[i]] = vals[i]
        }else{
            obj[keys[i]] = null
        }
        i ++;
    }
    return obj
}

module.exports = twoArrayObject