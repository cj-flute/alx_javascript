#!/usr/bin/node
// A class Rectangle that defines a rectangle

class Rectangle {
    constructor(w, h) {
        this.width = w;
        this.height = h;
    }

    width(){
        return this.width;
    }

    height(){
        return this.height;
    }
}

module.exports = Rectangle