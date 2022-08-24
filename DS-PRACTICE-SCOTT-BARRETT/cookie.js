//when you declare a class, always capitalize the name of the class
class Cookie {
    //classes always have a constructor; this is what creates the new cokies form the class
    constructor(color) {
        this.color = color
    }
    getColor() {
        return this.color
    }
    setColor(color) {
        this.color = color
    }
}
 
let cookieOne = new Cookie('green')
let cookieTwo = new Cookie('blue')

console.log(cookieOne)
console.log(cookieTwo)