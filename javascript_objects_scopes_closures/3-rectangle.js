#!/usr/bin/node
// A class Rectangle that defines a rectangle

class Rectangle {
    constructor(w = 0, h = 0) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
        }
    }

    print() {
        for (let i = 0; i < this.height; i++){
            for (let j = 0; j < this.width; j++) { 
                process.stdout.write('X');
            }
            console.log("\n");
        }
    }
}

module.exports = Rectangle