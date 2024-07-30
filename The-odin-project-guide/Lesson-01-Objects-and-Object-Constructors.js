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
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(this.name)
    }
}

const player1 = new Player("Tim", "X");
const player2 = new Player("Jenn", "O");
//the "new" keyword is used t ocall the "Player" function and create a new object each time.

console.log(player1)
player1.sayName();

//Exercise - Making "Book" objects. The book objects should have the book's "title", "author", number of "pages" & wheather it is "read".
//put a function into the constructor that can report the book info like.. theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return ${this.title}, ${this.author}, ${this.pages}, ${this.read}
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

console.log(theHobbit.info());

    //4. The prototype
//All objects in JS have a prototype. The prototype is another object that the original object inherits from. The original object has access to all of its prototype's methods and properties.