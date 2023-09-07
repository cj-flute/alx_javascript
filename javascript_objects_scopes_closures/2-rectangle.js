#!/usr/bin/node
// A class Rectangle that defines a rectangle

class Rectangle {
    constructor(w=0, h=0) {
        this.width = w;
        this.height = h;

        if ((w <= 0) || (h <= 0)) { 
            return {}
        }
    }

    width() {
        return this.width;
    }

    height(){
        return this.height;
    }
}

module.exports = Rectangle