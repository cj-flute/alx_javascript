#!/usr/bin/node
// A class square that defines a square and inherits from Square of 5-square.js

const { Square } = require('./6-square.js');

class Square extends Square {
    constructor(size) { 
        super(size);
        this.width = size;
        this.height = size;
    }

    charPrint(c='X') {
        for (let i = 0; i < this.height; i++){
            for (let j = 0; j < this.width; j++) { 
                process.stdout.write(c);
            }
            console.log();
        }
    }
}

// const s1 = new Square(4);
// s1.charPrint();

// s1.charPrint('C');

module.exports = Square