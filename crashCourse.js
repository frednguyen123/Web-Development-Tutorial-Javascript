// Strings are placed between quotations
console.log('Hello World ') 

// Strings can be combined using '+'
console.log('Hello World ' + 'Fred') 

// Use [] to index a char in a string
console.log('Fred') 
console.log('Fred'[0]) 

// Printed to the console last char of Hello World
console.log('Hello World'[10]) 

// Use the .length property to see the length of a string
console.log('12345'.length) 

/*Variable str stores string then we can take length of 
variable that contains the string and subtract 1*/
let str ='David'
console.log(str.length)
console.log(str[str.length - 1])

/*Number Notes
+ add
- subtract
* multiply
/ divide
% modulus 19 % 5 = 4 (remainder)
*/

// Best practice to use Let and Const
// Const is not allowed to be reassigned
let name = 'Fred'
let fullName = 'Fred Nguyen'
let isRaining = true
let temperature = 20
let planet = 'Earth'

temperature = temperature + 2

/**
 * Converting Temperature
 * 
 * Celsius to Fahrenheit formula:
 * 
 * F = C x 1.8 + 32
 */

let celsius = 10; 
let fahrenheit = celsius * 1.8 + 32
console.log(fahrenheit)

// == vs ===
// == checks value
// === checks value and data types
// != checks if values are not equal
// !== checks if values and data types are not equal
let bool1 = '1' == 1
console.log(bool1)

let bool2 = '1' === 1
console.log(bool2)

// Conditionals (If-Statement)
let subscribed = false
let loggedIn = true

if(subscribed === true){
    console.log('show the video')
}
else if(loggedIn === true){
    console.log('tell the user to upgrade their subscription')
}
else{
    console.log('tell user to log into account')
}

// Conditional Example
let cash = 10
let price = 40
let difference = Math.abs(cash - price)

if(cash > price){
    console.log(`you paid extra - here's ${difference} dollars change`)
}
else if(cash === price){
    console.log("you paid the exact amount, have a nice day!")
}
else{
    console.log(`not enough money - you still owe ${difference} dollars`)
}

// && Operator Example
let cash2 = 50
let price2 = 40
let isStoreOpen = true

if (cash2 >= price2 && isStoreOpen === false) {
    console.log('we have enough cash to buy the products')
 }

// || Operator Example 
let cash3 = 50
let price3 = 40
let isStoreOpen2 = true

if (cash2 >= price2 || isStoreOpen) {
    console.log('we have enough cash to buy the products')
 }

// Truthy/Falsy Values
let val = ""
if(val){
    console.log("truthy value", !!val)
}
else{
    console.log("falsy value", !!val)
}

// Shortcut for an if else condition
// Ternary Operators
// If true, first condition, otherwise second condition
let hot = true
hot ? console.log('weather is hot outside') : console.log('weather is cold')

// Another Example
let subscribed2 = true
let loggedIn2 = true

let str2 = subscribed2 && loggedIn2 ? 'show the video' : 'hide the video'
console.log(str2);


/**
 * 'give receipt' : 'do not give receipt'
 *  Practice Problem
 */
let cash4 = 50;
let price4 = 40;
let isStoreOpen3 = true;
let enoughCash = cash4 >= price4

let str3 = enoughCash && isStoreOpen3 ? 'give receipt' : 'do not give receipt'
console.log(str3);

// While Loops
let count = 1;
while(count <= 10){
    console.log('this ran')
    count = count + 1;
}

for (let i = 0; i < 10; i++){
    console.log(i);
}

/**
 * Write a for-loop that loops through 1 to 20
 * If the number is divisible by 3, print "Frontend"
 * If the number is divisible by 5, print "Simplified"
 * If the number is divisible by 3 and 5, print "Frontend Simplified"
 * If the number is *not* divislbe by either 3 or 5, print the number
 * 
 * @example
 * 1 -> 1
 * 2 -> 2
 * 3 -> "Frontend"
 * 4 -> 4
 * 5 -> "Simplfied"
 * ...
 * 15 -> "Frontend Simplfied"
 * ...
 * 20 -> "Simplified"
 */

for (let i = 1; i <= 20; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log(`${i} -> Frontend Simplified`)
    }
    else if (i % 3 == 0){
        console.log(`${i} -> Frontend`)
    }
    else if (i % 5 == 0){
        console.log(`${i} -> Simplified`)
    }
    else{
        console.log(`${i} -> ${i}`)
    }
}

/**
 * Print out every character from the string:
 * "Frontend Simplified"
 * 
 * @example
 * 'F'
 * 'r'
 * 'o'
 * 'n'
 * 't'
 * 'e'
 * 'n'
 * 'd'
 */

// use string.length to find the length of the string
// to loop through every index i < string length
const string = 'Frontend Simplified'
for (let i = 0; i < string.length; i++){
    console.log(string[i])
}

// Function Example 
// Define function
function welcomePersonToFES(firstName, lastName){
    console.log(`Welcome to FES, ${firstName} ${lastName}`)
}

// Call the function
welcomePersonToFES('David', 'Bragg');
welcomePersonToFES('John', 'Doe');

// Example 2 (showcasing return function)
function fn(){
    return 'my return'
    console.log('my function')
}

console.log(fn())

// Example 3 
// Parameter is when you're defining, Argument is when you're calling function
function sumOfTwoNumbers(num1, num2){
    return num1 + num2
}

console.log(sumOfTwoNumbers(10, 20));

/**
 * Create a function that converts Celsius to Fahrenheit
 * 
 * Celsius to Fahrenheit
 * F = C x 1.8 + 32
 * 
 * @example
 * convertCelsiustoFahrenheit(0) -> 32
 * convertCelsiustoFahrenheit(10) -> 50
 * convertCelsiustoFahrenheit(30) -> 86
 */

function convertCelsiustoFahrenheit(celsius){
    let fahrenheit = celsius * 1.8 + 32
    return fahrenheit
}

/* Second Way to define function */
// const convertCelsiustoFahrenheit = (celsius) =>{
//     return celsius * 1.8 + 32
// }

console.log(convertCelsiustoFahrenheit(0));
console.log(convertCelsiustoFahrenheit(10));
console.log(convertCelsiustoFahrenheit(30));

// ARRAY SECTION
let arr = [20, 30, 40, 50, 100]

// First Element of array: 
console.log(arr[0])

// Last Element of array: 
console.log(arr[arr.length - 1])

// Add Element to an end of an array:
arr.push(200)

console.log (arr)


// Callback Function
// Each time it sees 'true' it adds it to the new array
// FILTER METHOD

/**LONG METHOD
 * let newArr = arr.filter((element) => {
    console.log (element)
    if (element < 50)
        return true
})


// SHORT METHOD
let newArr = arr.filter(element => {
    return (element < 50)
})
*/

// SHORTEST METHOD (ONE LINE)
let newArr = arr.filter(element => element < 50)

console.log (newArr)

/**
 * Filter out all the 'FAIL' elements in an array
 * 
 * @examples
 * ['A+', 'A', 'FAIL'] => ['A+', 'A']
 * ['FAIL', 'FAIL', 'B'] => ['B']
 * ['FAIL'] => []
 */

let grades = ['A+', 'A', 'FAIL']
let newArray = grades.filter((element) => {
    if (element !== 'FAIL')
        return true
})

console.log(`${grades} -> [${newArray}]`)
console.log(newArray)

let grades2 = ['FAIL', 'FAIL', 'B']
let newArray2 = grades2.filter((element) => element !== 'FAIL')

console.log(`${grades2} -> [${newArray2}]`)
console.log(newArray2)

/**
 * Filter out all the 'FAIL' elements in an array
 * without using the Array.filter method
 * 
 * @examples
 * ['A+', 'A', 'FAIL'] => ['A+', 'A']
 * ['FAIL', 'FAIL', 'B'] => ['B']
 * ['FAIL'] => []
 */

let goodGrades = []
for(let i = 0; i < grades.length; i++){
    if (grades[i] !== 'FAIL'){
        goodGrades.push(grades[i])
    }
}
console.log(goodGrades)

// MAP METHOD
// LONGEST METHOD
let currentArr = [1, 4, 9, 16]

let updatedArr = currentArr.map((element) => {
    console.log(element)
    return undefined;
})

// SHOFTEST METHOD
//let updatedArr = currentArr.map((element) => 10)

console.log(updatedArr)

/**
 * Turn each element in an array of dollars into cents
 * 
 * @examples
 * [1, 5, 10, 3] => [100, 500, 1000, 300]
 * [0, 10, 15] => [0, 1000, 1500]
 */

let dollars = [1, 5 , 10, 3]

let cents = dollars.map((element) => {
    return element * 100
})
let cents2 = dollars.map((element) => element * 100)

console.log(cents)
console.log(cents2)

/**
 * Turn each element in an array of dollars into cents
 * without map method
 * 
 * @examples
 * [1, 5, 10, 3] => [100, 500, 1000, 300]
 * [0, 10, 15] => [0, 1000, 1500]
 */

 let dollarsNoMap = [0, 10, 15]
 let centsNoMap = []
for (let i = 0; i < dollarsNoMap.length; i++){
    centsNoMap.push(dollarsNoMap[i] * 100)
}
console.log(centsNoMap)

// OBJECTS

let users = [
    {
        username: 'frederick',
        email: 'fred@unlv.nevada.edu',
        password: 'fred123',
        subscriptionStatus: 'VIP',
        discordId: 'Frederick#0000',
        lessonsCompleted: [0, 1],
    },
    {
        username: 'john',
        email: 'john@unlv.nevada.edu',
        password: 'john123',
        subscriptionStatus: 'VIP',
        discordId: 'John#0000',
        lessonsCompleted: [0, 1, 2, 3],
    },
    {
        username: 'ted',
        email: 'ted@unlv.nevada.edu',
        password: 'ted123',
        subscriptionStatus: 'VIP',
        discordId: 'ted#0000',
        lessonsCompleted: [0, 1, 2, 3],
    },
];

// SAMPLE TESTS
// console.log(user.username[0])
// console.log(user.subscriptionStatus)
// console.log(user.lessonsCompleted.map(element => element * 2))
// console.log(users[1].lessonsCompleted.map(elem => elem * 2))

/**
 * function takes in email and password
 * loop goes through array of objects
 * compares input with objects to verify details
 */
function login(email, password){
    for (let i = 0; i < users.length; ++i){
        if (users[i].email === email){
            console.log(users[i])
            if (users[i].password === password){
                console.log('log the user in - the details are correct')
            }
            else{
                console.log('password is incorrect - try again')
            }
            return
        }
    }
    console.log('could not find an email that matches')
}

login('john@unlv.nevada.edu', 'john123')

/**
 * Create a register function that accepts:
 * -username 
 * -email 
 * -password 
 * -subscriptionStatus 
 * -discordId 
 * -lessonsCompleted 
 * 
 * Inside your register function:
 * 1. Create a user object
 * 2. Push this user object onto the 'users' array
 */

// ORIGINALLY CODED

// function register(name, email, password, subscriptionStatus, discordId, lessonsCompleted){
//     let userObject = {
//         username: name,
//         email: email,
//         password: password, 
//         subscriptionStatus: subscriptionStatus,
//         discordId: discordId,
//         lessonsCompleted: lessonsCompleted,
//     }
//     users.push(userObject)
// };

// register('brad', 'brad@unlv.nevada.edu', 'brad123', 'VIP', 'brad#000', [0, 1]);
//console.log(users)

// SHORTER BEST PRACTICE
function register(user){
    users.push(user)
};

register({
    username: 'brad', 
    email: 'brad@unlv.nevada.edu', 
    password: 'brad123', 
    subscriptionStatus: 'VIP', 
    discordId: 'brad#0002', 
    lessonsCompleted: [0, 1]
})
console.log(users)