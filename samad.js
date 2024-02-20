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
