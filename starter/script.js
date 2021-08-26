// let js = 'amazing';
//       console.log(40+8+23-10);

//       console.log('Nina');
//       console.log(23);

// let firstName = "Nina";

 // variable names cannot start with numbers either and there are reserved key words that cannot be variable names
// variables cannot start with upper case letters and you should write camelcase
// there are several ways to write variable names:

// let first_ = 'jonas';
// let firstNamePerson;

// this is another way, but more popular format on Ruby:
// let first_name

// console.log(firstName);

// let myJob = 'programmer';
// console.log(myJob);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// typeof will define what type of data type it is

// console.log(typeof true); //boolean
// console.log(typeof javascriptIsFun); //boolean
// console.log(typeof 23); //number
// console.log(typeof 'Jonas'); //string

// javascriptIsFun = 'YES';
// console.log(typeof javascriptIsFun); //boolean

//undefined
// we defined a variable using the let function and named it year, but it hasn't been defined
// we use console.log to print out the year but on the console it will say undefined bc year doesn't have a value
// and we use typeof to see what type of data type it is

// and we finally define year as 2021 so we did console log and did type of and the undefined value changed to a number value
// this is what we call dynamic typing when we change one data type to another 

// let year;
// console.log(year);
// console.log(typeof year);

// year = 2021;
// console.log(year);

// console.log(typeof null);

// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;

// const job;

// math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2


// const firstName = 'Nina';
// const lastName = 'Kim';
// console.log(firstName + ' ' + lastName);

// // assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100 
// x++; // x = x + 1
// x--; // x = x - 1
// console.log(x)

// // comparison operators 
// console.log(ageJonas > ageSarah); // >, <. >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// // math that happens in code must follow the PEMDAS 
// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// const firstName = 'Nina';
// const lastName = 'Kim';
// const job = 'student';
// const year = 1997;
// const birthYear = 2021;


// // concat strings and variables, good to understand but not really a good dated way
// const nina = "I'm " + firstName + lastName + 'and I am a' + job + '. I am' + (year - birthYear) + 'years old.';
// console.log(nina);

// // template literals are the better way of combining strings and variables
// const ninaNew = `I'm ${firstName} ${lastName} and I'm a ${job}. I am ${birthYear - year} years old.`;
// console.log(ninaNew);

// // you can use template literals like this too without quotes, works the same way
// console.log(`Hi!`);
// console.log(`${job}`);

// another way of doing the same code up there would be:

// const ages = 15;

// if (ages >= 18){
//     console.log(`Sarah can start driving now!`)
// } else {
//     const yearsLeft = 18 - ages;
//     console.log(`Sarah is not old enough. She must wait ${yearsLeft}.`);
// }

// const birthYear = 2012;

// let century;
// if(birthYear <= 2000){
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);


