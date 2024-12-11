// const fruit ={
//     name: "banana"
//     sayHiArrow: 9 => console.log("Hi I am a " + this.name)
//     sayHiFunction: function () {
//         console.log("HI I am a " + this.name)
//     }
// }

// console.log("Output of Say Hi Function");
// fruit.sayHiFunction()


class Fruit {
    color;
    name;
    constructor(name, color){
        this.name = name;
        this.color =color;
    }
}


const banana = new Fruit("banana", "yellow")
const apple = new Fruit("apple", "red")


// const apple = {
//     name: "apple"
//     color: "red"
// }

// const banana = {
//     name: "banana"
//     color: "yellow"

// }