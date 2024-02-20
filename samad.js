// question no 1 installation
// question no 2
// defining the variable & define data type & assign value in it
var personName = "samad";
console.log("Hello ".concat(personName, " would you like to learn some Python today?"));
// question 3
var personName1 = 'GithUb@sAmade747';
console.log("Lowercase:  ".concat(personName1.toLowerCase()));
console.log("Uppercase: ".concat(personName1.toUpperCase()));
console.log("titlecase: ".concat(toTitleCase(personName1)));
function toTitleCase(str) {
    // split space jahan bi ahrha hoga wahan se "samad", "smad" coma seperated word bana de ga
    // map return a new array map return each element one by one, also with index number
    // slice take index, length 
    // join mai add hogye ga baqi space ke badh
    return str.split(' ').map(function (word) { return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase(); }).join(' ');
}
// question 4
var quote = 'A person who never made a mistake never tried anything new.';
var author = 'Albert Einsten';
console.log("".concat(author, " once said, ").concat(quote));
// question 5
var famous_person = 'Albert Einsten';
console.log("".concat(famous_person, " once said, ").concat(quote));
// question 6
var whitespacepersonName = "\t samad \n";
console.log(whitespacepersonName);
var stripingSpace = whitespacepersonName.trim();
console.log(stripingSpace);
// queston 7 + 8 adding line in each result
console.log(5 + 3 + '<br> <hr>');
console.log(10 - 2 + '<br> <hr>');
console.log(4 * 2 + '<br> <hr>');
console.log(16 / 2 + '<br> <hr>');
// question 9
var favoriteNumber = 3328222026;
var textmessage = "my favorite number ".concat(favoriteNumber);
console.log(textmessage);
// questin 10
// define a variable & its type string assing value in it samade747
var githubusername = "samade747";
// defne a variable & type assing value
var password = '*********';
// question 11
// creating a variable using array 
var friendsarr = ['samad', 'manahil', 'fatimah', 'dhedhi'];
// for loop, acceess each element in list at once a time each, using length
for (var i = 0; i < friendsarr.length; i++) {
    console.log(friendsarr[i]);
    // question 12
    console.log("".concat(friendsarr[i], " i love you"));
}
// question 13
// delcare a var assign value define type with array value
var transportation = ["motorcycle", "car", "bicycle", "scooter"];
// now transportation par for each signle par bari bari chalega single item return krega 
transportation.forEach(function (mode) {
    console.log("i would like to own a ".concat(mode));
});
// question 14
var invitaionList = ['samad', 'fatimah', 'iqra'];
invitaionList.forEach(function (person) {
    console.log("Dear ".concat(person, "  invited to dinner at my home"));
});
// Question 15
var unabletoAttend = 'Fatimah';
// filter create a new array remove unable to attend person 
var newInvitaionList = invitaionList.filter(function (element) { return element !== 'fatimah'; });
console.log(newInvitaionList);
newInvitaionList.push("halima");
console.log(newInvitaionList);
newInvitaionList.forEach(function (person1) {
    console.log("Dear ".concat(person1, " invited to dinner at my home rightnow"));
});
// question 16
console.log("found new table with bigger space for dinning inviting new guest");
// adding the yumna from starting
newInvitaionList.unshift('yumna');
// if we give postive number (5.8) return 5 if we give (-3.2) return -4 if we give (10) return 10
// using Math.floor becasue want to calculate the index number
var addingMiddle = Math.floor(newInvitaionList.length / 2);
// splice method remove elemnt replace or add new element 
//                      start, deletecount, additemname
newInvitaionList.splice(addingMiddle, 0, 'anum');
newInvitaionList.forEach(function (person3) {
    console.log("Dear ".concat(person3, " invited to dinner at my home rightnow"));
});
// question 17
console.log("my new dinner table wont arrived on time so no space for more guests, i have space for only 2 guests ");
console.log(newInvitaionList);
while (newInvitaionList.length > 2) {
    var removedGuest = newInvitaionList.pop();
    console.log("sorry ".concat(removedGuest, " sory we have no space the invitaion is cancel will invite you soon"));
}
console.log("Remaining guest hey you are still invited ".concat(newInvitaionList));
newInvitaionList.pop();
console.log("Remaining guest ".concat(newInvitaionList));
newInvitaionList.pop();
console.log("Remaining guest ".concat(newInvitaionList));
