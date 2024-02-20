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
    //split space ke badh word bnadeta hai   slice return new arry with take 2 condition index & length       
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


// question 12
console.log(`${friendsarr[i]} i love you`)
}

// question 13
// delcare a var assign value define type with array value
let transportation: string[] = ["motorcycle", "car", "bicycle", "scooter"]
// now transportation par for each signle par bari bari chalega single item return krega 
transportation.forEach(mode => {
    console.log(`i would like to own a ${mode}`)
});


// question 14

let invitaionList: string[] = ['samad', 'fatimah', 'iqra']
invitaionList.forEach(person =>{
    console.log(`Dear ${person}  invited to dinner at my home`)
})


// Question 15
const unabletoAttend: string = 'Fatimah'
// filter create a new array remove unable to attend person 
const newInvitaionList = invitaionList.filter(element => element !== 'fatimah')
console.log(newInvitaionList)
newInvitaionList.push("halima")
console.log(newInvitaionList)

newInvitaionList.forEach(person1 => {
    console.log(`Dear ${person1} invited to dinner at my home rightnow`)
})


// question 16
console.log(`found new table with bigger space for dinning inviting new guest`)
// adding the yumna from starting
newInvitaionList.unshift('yumna')
// if we give postive number (5.8) return 5 if we give (-3.2) return -4 if we give (10) return 10
// using Math.floor becasue want to calculate the index number
let addingMiddle = Math.floor(newInvitaionList.length / 2)
// splice method remove elemnt replace or add new element 
//                      start, deletecount, additemname
newInvitaionList.splice(addingMiddle, 0, 'anum')

newInvitaionList.forEach(person3 => {
    console.log(`Dear ${person3} invited to dinner at my home rightnow`)
})


// question 17
console.log(`my new dinner table wont arrived on time so no space for more guests, i have space for only 2 guests `)
console.log(newInvitaionList)
while (newInvitaionList.length > 2) {
    let removedGuest = newInvitaionList.pop()
    console.log(`sorry ${removedGuest} sory we have no space the invitaion is cancel will invite you soon`)
}

console.log(`Remaining guest hey you are still invited ${newInvitaionList}`)

newInvitaionList.pop()
console.log(`Remaining guest ${newInvitaionList}`)
newInvitaionList.pop()
console.log(`empty array list ${newInvitaionList}`)

// Question 18 