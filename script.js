/*
const firstName = 'Brian'
const age = 23
const job = 'Software Developer'
const birthYear = 1997
const year = 2040


// using template strings
const jonasNew = `I am ${firstName}, a ${year - birthYear}, old ${job}`
console.log(jonasNew)


const age = 13
//const isOldEnough = age >= 18
if(age >= 19){
    console.log('Sarah can start driving')
}else {
    const yearsLeft = 18 - age
    console.log(`Sarah is too young. wait another ${yearsLeft} years`)
}


const yearBirth = 2012
let century
if(yearBirth <=2000){
    century = 20
}else {
    century = 21
}
console.log (century)




//falsy value include: 0, '', undefined, null, NaN

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Brian'))
console.log(Boolean({}))

const money = 0
if (money){
    console.log('do not spend it all')
}else{
    console.log('save it and get a job')
}


let height
if (height){
    console.log('YAY! Height is defined')
}
else{
    console.log('Height is UNDEFINED')
}




const age = 10
if (age === 18) console.log('You just became an adult')
*/

const favourite = Number(prompt("what is your favourite number"))
console.log(favourite)
console.log(typeof favourite)

if (favourite === 23){   //'23' == 23
    console.log('This 23 is an amazing number')
}else if (favourite === 7) {
    console.log('7 is also a cool number')
}else {
    console.log('number is not 7 or 23')
}