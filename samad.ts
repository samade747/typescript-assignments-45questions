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
let stripingSpace: string = whitespacepersonName.trim()
console.log(stripingSpace)

// queston 7 + 8 adding line in each result
console.log(5 + 3 + '<br> <hr>' );
console.log(10 - 2 + '<br> <hr>'); 
console.log(4 * 2 + '<br> <hr>'); 
console.log(16 / 2 + '<br> <hr>'); 

// question 9
let favoriteNumber: number = 3328222026;
let textmessage: string = `my favorite number ${favoriteNumber}`
console.log(textmessage);

// questin 10
// define a variable & its type string assing value in it samade747
let githubusername:string = "samade747"
// defne a variable & type assing value
let password:string = '*********'


// question 11
// creating a variable using array 
let friendsarr: string[] = ['samad', 'manahil', 'fatimah', 'dhedhi']
// for loop, acceess each element in list at once a time each, using length
for (let i = 0; i < friendsarr.length; i++){
    console.log(friendsarr[i])
}






