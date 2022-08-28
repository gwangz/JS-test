/*
const firstName = 'Brian'
const age = 23
const job = 'Software Developer'
const birthYear = 1997
const year = 2040


// using template strings
const jonasNew = `I am ${firstName}, a ${year - birthYear}, old ${job}`
console.log(jonasNew)

*/
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