// let language = "Korean";
// language = "English";
// console.log(language);

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

// we created a variable using the let function and assigned them data, which is the numbers
// we created more variables to define their BMI and used the formula used to normally calculate BMI

// and then we created our last variable that asks if Marks BMI is larger than johns, then it's true, not false. 
// then we just console.logged our results 

// let markMass = 95;
// let markHeight = 1.88;
// let johnMass = 85;
// let johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

// const markHighterBMI = markBMI > johnBMI;


// console.log(markBMI, johnBMI, markHighterBMI);

// console.log(markBMI, johnBMI);

if(markBMI >= johnBMI){
    console.log(`Mark's BMI: ${markBMI} is higher than John's BMI: ${johnBMI}.`)
}else{
    console.log(`John's BMI: ${johnBMI} is higher than Mark's BMI: ${markBMI}.`)
}
