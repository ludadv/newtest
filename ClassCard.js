'use strict';

class Card {
    constructor(name, quantity, status) {
        this.name = name,
        this.quantity = quantity,
        this.status = status
    }
}

class Arr {
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    set pushArr(num) {
        return this.arr.push(num);
    }
    set deleteArr(num) {
        return this.arr.splice(num, 1);
    }

}
let NA = new Arr();
// NA.pushArr = 7;
// console.log(NA);

NA.deleteArr = 5;
console.log(NA);
