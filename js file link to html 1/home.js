console.log('hello');
alert('hi');
var b = 'smoothie';
console.log(b);


// get element by id from html file, and change the content to "Hey There"
document.getElementById('someText').innerHTML = "Hey There";

// ask user to enter  
prompt('what is your age? '); // gui window will pop up and ask for input

// store input in a variable
var age = prompt('what is your age? '); 
document.getElementById('someText').innerHTML = age;

// numbers in js
var num1 = 5.7;
var x = 2;

// creating and calling functions
function fun() { // creating a function
    console.log('this is a function');
}
fun(); // calling function


// function with argument
function greeting(name) { 
    console.log(name);
}
var name = prompt('enter your name');
greeting(name); 

// for loop
for ( let x = 2; x <100; x++){ // use let for "for-loop"
}


/*                 data types          */
// object
let name = {first: 'Jane', last: 'Dan'}; 

// array
let groceries = ['apple', 'banana'];

// undefine
let random; 

// value null
let nothing = null;



/* string methods */
let fruit = 'banana';
fruit.length; 
fruit.indexOf('nan'); // 2
fruit.indexOf('1'); //-1
// slicing
fruit.slice(2, 4); // na (slice from index 2 to but not including 4)
fruit.slice(2, 6); // nan
// replacing
fruit.replace('ban', '123'); //123ana
// upper case
fruit.toUpperCase();
// lower case
fruit.toLowerCase();
// char at
fruit.charAt(2); // n
fruit[2]; // n
//split
fruit.split(''); // spliting a string to an array with 6 letters 
    // ['b','a', 'n', 'a', 'n', 'a']  


// array in js
let fruits = ['banana', 'apple'];
let fruits1 = new Array('banana', 'apple'); // use() instead of []
// array methods
console.log('to string', fruits.toString());  // turn array to string
fruits.join(' - '); // "banana - apple"

// 1. print original fruits array
// 2. pop the last element in fruits array
// 3. print the updated fruits array after popping
console.log(fruits, fruits.pop(), fruits)

console.log(fruits.push('berries')); // add "berries in the back of the array"

fruit.shift(); // remove first element from an array

fruits.unshift('kiwi'); // add new element to the front of the array

// concatenating 2 arrays
let vegetables = ['asparagus', 'tomatos'];
let allGroceries = fruits.concat(vegetables); // [banana, apple, asparagus, tomatos]

// slicing in array
allGroceries.slice(1,3); // [apple, asparagus]

// reverse the order of elements in an array
allGroceries.reverse(); // [tomatoes, asaparagus, apple, banana]

// sorting array of string type
allGroceries.sort();

// sorting array of int type
let someNumbers = [5, 10, 2, 4, 5];
someNumbers.sort(function(a, b) {return a-b}); //ascending
someNumbers.sort(function(a, b) {return b-a}); //descending

// object in js
let student = {
    first: 'RAN', 
    last: 'Owen', 
    age: 25, 
    height: 170,
    studentInfo: function(){
        return this.first + '\n' + this.last; // this.
    }
};
// to access members in an object
console.log(student.first);
console.log(student.last);
// mutate members in an object
student.first = 'Kobe'; // no longer able to use student[first]
student.studentInfo();

// switch statements
switch(6) {
    case 0:
        text = 'weekend';
        break;               //without 'break' it will go check for next cases
    case 6:
        text = 'weekedn';
        break;
    default:
        text = 'weekday';
        break;                
}



    
