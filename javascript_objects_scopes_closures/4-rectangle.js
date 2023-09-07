#!/usr/bin/node
// A class Rectangle that defines a rectangle

class Rectangle {
    constructor(w = 0, h = 0) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
        }
    }

    rotate() {
        let box = this.width;
        this.width = this.height;
        this.height = box;
    }

    double() {
        this.width = this.width * 2;
        this.height = this.height * 2;
    }

    print() {
        for (let i = 0; i < this.height; i++){
            for (let j = 0; j < this.width; j++) { 
                process.stdout.write('X');
            }
            console.log();
        }
    }
}

const r1 = new Rectangle(2, 3);
console.log('Normal:');
r1.print();

console.log('Double:');
r1.double();
r1.print();

console.log('Rotate:');
r1.rotate();
r1.print();

module.exports = Rectangle