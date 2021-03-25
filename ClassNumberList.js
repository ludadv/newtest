"use strict";

class Circle {
    constructor(radius, diameter) {
        this.radius = radius
        this.diameter = diameter
    }
    get circleRadius() {
        return this.radius;
    }
    get circleDiameter() {
        return this.diameter;
    }
    set circleRadius(value) {
        this.radius = value;
    }
    get result() {
        return this.circleSquare();
    }
    circleSquare() {
        return Math.PI * Math.pow(this.diameter, 2) / 4;
    }
    get result1() {
        return this.circlePerimeter();
    }
    circlePerimeter() {
        return (2 * Math.PI) * this.radius;
    }
}
