//var name = 'Eric';

var obj = { name: 'eric' };

var age = 10;

var myName = 'Eric';

const food = 'apple';

for ( let i = 0; i < 10; i++ ) {
	//console.log(i);
}

// hundreds of other lines of code


function ageMaker(strings, name, age, someNum) {
	console.log(strings);
	strings[0] = 'Hallo, Ich bin';
	var outputString = 'Hallo, Ich bin';
	console.log(name);
	console.log(age);
	console.log(someNum);

	return `${outputString}${name}`;
}

var funString = 'My name is ' + myName + ' and I am ' + age + ' years old';
var newString = ['My name is', myName, 'and I am', age, 'years old'].join(' ');
//var templateString = ageMaker`My name is ${myName} and I am ${age + 10} years old ${15}`;
//console.log(funString);


// function fullName(first, last) {
// 	return `${first} ${last}`;
// }

// var fullName = function(first, last) {
// 	return `${first} ${last}`;
// }

var fullName = (first,last) => {
	return `${first} ${last}`;
}



function fullName(first, last) {

}

let multiply = (a, b) => a * b;

//cards.forEach((el) => console.log(el));

var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   return a - b;
// });

numbers.sort((a,b) => b - a);
//console.log(numbers);

var goodFunction = (myName, feelings, food) => {
	console.log(this);
};


// REST parameters
function oldFunction(myName, feelings, food) {
	console.log(arguments);
	//console.log(this);
}

function restParam(myName, age, ...coolStuff) {
	console.log(arguments);

	console.log(myName); console.log(age);
	console.log(coolStuff);
}

// getEls will take one or more element IDs, and return an element if it's the only argument, or return an array of elements
function getEls(elementId) {
	var elements = [];

	// if there are arguments, return a reference to the element for each one
	if ( arguments.length == 1 ) {
		return document.getElementById(arguments[0]);
	} else if ( arguments.length ) {
		for ( var i = 0; i < arguments.length; i++ ) {
			var el = document.getElementById(arguments[i]);

			if ( el ) {
				elements.push(el);
			}
		}
	}

	return elements;
}

/*******
 * spreadEls(elementIds)
 * 
 * returns array of element references
 * Hello. This is a funny story.
 */
function spreadEls(elementId, ...elementIds) {
	var elements = [];

	if ( ! elementIds ) {
		elements.push(document.getElementById(elementId))
		return elements;
	} else {
		for ( var i = 0; i < arguments.length; i++ ) {
			var el = document.getElementById(arguments[i]);

			if ( el ) {
				elements.push(el);
			}
		}
	}

	return elements;
}
spreadEls()
var els = getEls('something', 'something_else', 'asdfasdfasdf');
for ( var el of els ) {
	console.log(el);
}

spreadEls()

// write a function that returns either an element, or array of elements
// function getEl(elementId, ...otherEls) {
// 	// an element must be provided, otherwise error
// 		if ( ! elementId ) {
// 		console.error('Must provide at least one element to return');
// 		return null;
// 	}

// 	// we've gotten multiple elements, return an array
// 	if ( otherEls.length ) {
// 		otherEls.unshift(elementId);
// 		let elements = [];

		
// 		for ( let elId of otherEls ) {
// 			console.log(elId);
// 			elements.push( document.getElementById(elId) );
// 		}

// 		return elements;
// 	}

// 	return document.getElementById(elementId);
// }

var ages = [10, 12, 11];

function sumAllTheAges(x,y,z) {
	return x + y + z;
}

var [age1, age2, age3, age4] = ages;




//getEl('avatar_image').setAttribute('src', avatar);

if ( true ) {
	// do something here that is true
	//console.log(true);
} else {
	// do the false
	//console.log(false);
}

// false ? console.log(true) : console.log(false);

// console.log( false ? 'yes' : 'no' );

var arr = new Array();

const cardsInDeck = [
	'ace',
	'king',
	'queen'
];

const suits = [
	'clubs',
	'spades',
	'hearts',
	'diamonds'
];

function Deck(numberOfCards, includeJokers /* boolean */) {
	this.numberOfCards = numberOfCards;
	this.cards = [];

	for ( var suit of suits ) {
		for ( var value of cardsInDeck ) {
			this.cards.push( new Card(suit, value) );
		}
	}
	
	if ( includeJokers ) {
		this.numberOfCards = this.numberOfCards + 2;
		//this.cards.push('joker 1');
		//this.cards.push('joker 2');
	}

	this.hasJokers = true;
}


// primary class constructor
function Card(value, suit) {
	this.value = value;
	this.suit = suit;
	this.scoreValue = 10;

	this.image = '';
	this.cardColor = 'red';

	this.calculateScore = function() {
		return this.scoreValue + 10;
	}

}

// toString method of Cards
Card.prototype.toString = function() {
	return this.suit + ' of ' + this.value;
}

var arr = new Array();

var arr = [];

// define a food object
function Food(name) {
	this.name = name;
}
Food.prototype.toString = function() {
	return "I am a FOOD! -- " + this.name;
}

// define a fruit object
function Fruit(name, seeds, color) {
	this.name = name;
	this.seeds = seeds;
	this.color = color;
}

Fruit.prototype = Food.prototype;

// define a meat object
function Meat(name, type) {
	this.name = name;
	this.type = type;
}
Meat.prototype = Food.prototype;
Meat.prototype.cookTemp = function() {
	return 'Medium Rare';
}
Meat.prototype.getName = function() {
	return this.name;
}
function Vegetable() {}
Vegetable.prototype = Food.prototype;



// ES6 syntax for classes/OOP

class IceCream {

	constructor(name, flavor, temp) {
		this.name = name;
		this.flavor = flavor;
		this.temp = temp;
	}

	get coolName() {
		return this.name;
	}

	melt() {
		if ( this.temp > 0 ) { 
			return 'It is melting';
		} else {
			return 'It is frozen';
		}
	}

}

class Popsicle extends IceCream {
	stickType() {
		return 'wooden';
	}
}

class User {

	constructor() {
		this.email = 'guest';
		this.id = null;

		if ( localStorage.getItem('user') ) {
			var json = JSON.parse(localStorage.getItem('user'));
			this.email = json.email;
			this.id = json.id;
			this.first = json.first;
			this.last = json.last;

			document.getElementById('login_div').innerHTML = `Hello again, ${this.first}`;
		}

		if ( document.getElementById('button_login') ) {
			document.getElementById('button_login').addEventListener('click', this.login.bind(this));
		}
	}

	getGames() {
		// query database for all games played by this user

	}

	saveScores(Game) {
		// query database to save my scores

	}

	login() {
		console.log(this);

		// get email and password and check to see if this is correct
		let email = document.getElementById('email_login').value;
		let pass  = document.getElementById('pass_login').value;

		if ( email == 'me@ericharrison.info' && pass == 'password' ) {
			// good login, store it.
			this.email = email;
			this.id = 1; // get the ID from the server

			this.first = 'Eric';
			this.last  = 'Harrison';

			localStorage.setItem('user', JSON.stringify(this));
		} else {
			console.warn('Invalid password');
		}
	}

}

class Game { 

}

var user = new User();