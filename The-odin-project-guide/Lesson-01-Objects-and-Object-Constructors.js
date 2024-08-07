    //1. Define objects - Object literal
//What you wil learn:
// - How to write an object constructor and instantiate the object
// - Describe what a prototype is and how it can be used
// - Explain prototypal inheritance
// - Understand the basic do's and don't's of prototypal inheritance
// - Explain what the "this" keyword is


const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function() {
        //action
    }    
};

//2 Ways to get information from an object: 

//Dot notation 
myObject.property;
//When to use? Mostly used, however, cannot be used if there is a space in the object that will be called like the "key" below.

//Bracket notation
myObject["obnoxious property"];

    //2.Objects as design pattern

//Example 1:
const playerOneName = "Tim";
const playerTwoName = "Jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// console.log("PlayerOne Name: " + playerOneName + ", Marker: " + playerOneMarker)
// console.log(`PlayerTwo Name: ${playerTwoName}, Marker: ${playerTwoMarker}`)

//Example 2:
//Origin objects
const playerOne = {
    name:"tim",
    marker: "X",
}

const playerTwo = {
    name:"Jenn",
    marker: "O",
}

function printDetails(player) {
    // console.log("Name: " + player.name);
    // console.log("Marker: " + player.marker);
}

const playerDetails = printDetails;

// playerDetails(playerOne);
// playerDetails(playerTwo);

    //3. Object constructors
//Common convention to use a capital letter as the first letter of a function name for constructor.
///what is contructor? A special funcion used to create and initialise obects. It provide a blueprint/ reusable code to create more objects with similar properties and method(function)
function Player(name, marker) {
    this.name = name;
    this.marker = marker;//these are properties
    this.sayName = function() {
        console.log(this.name)
    }
}

const player1 = new Player("Tim", "X");
const player2 = new Player("Jenn", "O");
//the "new" keyword is used to call the "Player" function and create a new object each time.

//console.log(player1)
//player1.sayName();

///Exercise - Making "Book" objects. The book objects should have the book's "title", "author", number of "pages" & wheather it is "read".
///put a function into the constructor that can report the book info like.. theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`
        //Using Concatenated String
        return [this.title, this.author, this.pages, this.read]
        //Using array
        return {
         title: this.title,
         author: this.author,
         pages: this.pages,
         read: this.read
         //Using Object
        };
    };
};

const theHobbit = new Book("The Hobbit by J.R.R.", "Tolkien", "295 pages", "not read yet")

//console.log(theHobbit.info());

Object.getPrototypeOf(player1) === Player.prototype;
///".prototype" is an object automaticaly attached to every function in JS including constructor functions.


    //4. The prototype
//All objects in JS have a prototype. It refers to the mechanism by which objects can inherit properties and methods from other objects. 
//Functions in JS are also objects, have a special property called "proptotype".

Player.prototype.sayHello = function() {
    return "Hello I'm a player"
}

///Methods - refers to a function that is associted with an object. Methods are properties of objects that are defined as functions. 

//console.log(player1.sayHello())

// function Person(name) {
//     this.name = name;
//   };
  
//   Person.prototype.sayHello = function() {
//     console.log(Hello, I am ${this.name})
//   };
  
function Person1(name) {
    this.name = name
    this.sayHello1 = function () {
        return `Hello, I am ${this.name}`
    }
  }

  function Person1(name) {
    this.winner = function () {
        return `${name} is the winner!`
    }
  }

//   const alice = new Person1('Alice');
//   console.log(alice.winner());
  

    ////5. Object.getPrototypeOf() vs. .__proto__ vs. [[Prototype]]
///"Object.getPrototypeOf()" is used to access an object's prototyp, ".__proto__" & [[Prototype]] also the same but outdated. 


    ///6. Prototypal inheritance - What are the purposes?
///Purpose 1 - Save memory. Defining every property and function takes up a lot of memory, especially there is a lot of common properties and functions. Centralisation!

///Purpose 2 - Prototypal Interitance! e.g. "player1" object inherit from the "Player.prototype" object which allows them to acess functions like ".winner"

// console.log(Player.prototype === Object.prototype)
///^ this check if "Player.prototype" is strictly equal to "Object.prototype" where all prototype inherits from by default. which is fault because they are distinct object in memory.

// console.log(Player.prototype.__proto__ === Object.prototype);
///^ this checks if the internal "[[Prototype]]" ".getPrototypeOf()" ".__proto__ " of "Player.prototype" is "Object.prototype" which is true. This indicates that Player.prototype inherits from Object.prototype.

// console.log(Object.getPrototypeOf(Player.prototype) === Object.prototype)


// console.log(typeof player === "number")

// console.log(player1.valueOf()); 

let num = 10;
// console.log(num.valueOf()); 

///Presenting String as an Object - A "string" object can be created using "string" constructor with the "new" keyword. This wraps the string in an object, giving it additional properties and methods .

let stringObject = new String ("Hello, world!");

//console.log(typeof stringObject) /// return as object as "new" key word make it into a string.

/// JS make use of prototype by having the objects contain a value to point to prototypes and ineriting from those prototypes, and thus forming a chain. This kind of inheritance using prototypes is hence 
/// named as Prototypal inheritance.
/// NOTE - 1. Every prototype object inherits from object.prototype by defualt
/// NOTE - 2. An object's "Object.getProtottypeOf()" value can only be one unqiue "prototype" object.

///In this case, Player.prototype inherits from Object.prototype, and consequently, all instances of Player (like player1 and player2) inherit from Object.prototype through the prototype chain.

///"Object.getPrototypeOf()"" to ‘get’ or view the prototype of an object, we can use Object.setPrototypeOf() to ‘set’ or mutate it. 

function Person3(name) {
    this.name = name;
}

Person3.prototype.sayName = function() {
    console.log(`Hello, I am ${this.name}!`);
};

function Player3(name, marker) {
    this.name = name;
    this.marker = marker;
}

Player3.prototype.getMarker = function () {
    console.log(`My maker is ${this.marker}`)
}

Object.getPrototypeOf(Player3.prototype)

Object.setPrototypeOf(Player3.prototype, Person3.prototype)
Object.getPrototypeOf(Player3.prototype)

const player4 = new Player3("steve", "X");
const player5 = new Player3("also steve", "O");

player4.sayName();
player5.sayName();

player4.getMarker();


console.log(Object.getPrototypeOf(Person3) === Function.prototype)
///^ "Object.getPrototypeOf(Person3)" This returns the prototype of the "Person3" function itself, which is "Function.prototype", not Object.prototype.
console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype)
///^ "Function.prototype" All function objects in JavaScript inherit from "Function.prototype". This prototype itself inherits from "Object.prototype".
///^ "Object.prototype" This is the end of the prototype chain for regular objects, and its prototype is null.

function CarlPerson(name) {
    this.name = name;
  }
  
  CarlPerson.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!`);
  };
  
  function CarlPlayer(name, marker) {
    this.name = name;
    this.marker = marker;
  }
  
  Object.setPrototypeOf(CarlPlayer.prototype, CarlPerson.prototype)
  
  function Carlnemy(name) {
    this.name = name;
    this.marker = '^';
  }
  
  Object.setPrototypeOf(CarlEnemy.prototype, CarlPerson.prototype)
  
  CarlEnemy.prototype.sayName = function() {
    console.log('HAHAHAHAHAHA');
  };
  
  const carl = new CarlPlayer('carl', 'X');
  carl.sayName();