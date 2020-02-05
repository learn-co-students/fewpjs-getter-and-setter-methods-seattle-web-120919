// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return 2 * this.radius
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    }

    get circumference() {
        return this.diameter * Math.PI
    }

    set circumference(circumference) {
        this.radius = circumference / (Math.PI * 2)
    }

    get area() {
        return Math.PI * this.radius ** 2
    }
}