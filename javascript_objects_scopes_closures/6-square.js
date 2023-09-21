#!/usr/bin/node
// A class square that defines a square and inherits from Square of 5-square.js

const  Sqaure  = require('./5-square.js');

class Square extends Sqaure {
    charPrint(c='X') {
        for (let i = 0; i < this.height; i++){
            for (let j = 0; j < this.width; j++) { 
                process.stdout.write(c);
            }
            console.log();
        }
    }
}

module.exports = Sqaure