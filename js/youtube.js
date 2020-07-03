{
let myFunc = function (x, y) {
    let total = 1;
    for (let i = 0; i < y; i++) {
        total *=x;
    }
    return total;
}

console.log(myFunc(3,3))


}