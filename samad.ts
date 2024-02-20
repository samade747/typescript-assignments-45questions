// question no 1 
// defining the variable & define data type & assign value in it
let personName: string = "samad"

console.log(`Hello ${personName} would you like to learn some Python today?`)


// question 2 

let personName1: string = 'GithUb@sAmade747'
console.log(`Lowercase:  ${personName1.toLowerCase()}`)
console.log(`Uppercase: ${personName1.toUpperCase()}`)
console.log(`titlecase: ${toTitleCase(personName1)}`)


function toTitleCase(str: string): string {
    // split space jahan bi ahrha hoga wahan se "samad", "smad" coma seperated word bana de ga
    // map return a new array map return each element one by one, also with index number
    // slice take index, length 
    // join mai add hogye ga baqi space ke badh
    return str.split(' ').map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

}





