const toString62 = function (num) {
    let res = ''
    let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    do {
        let rem = num % 62
        num = Math.floor(num / 62)
        let z = str.substr(rem, 1)
        res = `${z}${res}`
    }
    while (num > 0)
    return res
}

module.exports = {
    toString62: toString62
};