// question no 1 installation

// question no 2
// defining the variable & define data type & assign value in it
let personName: string = "samad"

console.log(`Hello ${personName} would you like to learn some Python today?`)


// question 3

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


// question 4
const quote: string = 'A person who never made a mistake never tried anything new.'
const author: string = 'Albert Einsten'
console.log(`${author} once said, ${quote}`)

// question 5

const famous_person: string = 'Albert Einsten'
console.log(`${famous_person} once said, ${quote}`)

// question 6
const whitespacepersonName:string = "\t samad \n"
console.log(whitespacepersonName)






