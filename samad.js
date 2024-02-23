// question no 1 installation
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
    //split space ke badh word bnadeta hai   slice return new arry with take 2 condition index & length       
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
console.log("empty array list ".concat(newInvitaionList));
// Question 18 
var likeToVisit = ['MADINAH', 'MAKKAH', 'USA', 'UK', 'UAE', 'CHINA'];
// printing the array in non alfabatical as it is
for (var i = 0; i < likeToVisit.length; i++) {
    console.log(likeToVisit[i]);
}
//copying the array with slice method its copy the array original remain the same using slice method
// slice method return a new array, and oriigianl array remain same, take index number & length .slice(starting index, length) or if we give an empty .slice() its copy whole array return new array 
var sortingArray = likeToVisit.slice();
// now sorting the above copied array
var sortedArray = sortingArray.sort();
for (var i = 0; i < sortedArray.length; i++) {
    console.log("sorted array ".concat(sortedArray[i]));
}
// showing original array
for (var i = 0; i < likeToVisit.length; i++) {
    console.log("original array ".concat(likeToVisit[i]));
}
// printing reverse alphabtcal order
// copying the original array 
var reverseAlfabaticalOrder = likeToVisit.slice();
console.log(reverseAlfabaticalOrder);
// first we sort the array then reverse 
reverseAlfabaticalOrder = reverseAlfabaticalOrder.sort();
// now reverse 
reverseAlfabaticalOrder = reverseAlfabaticalOrder.reverse();
console.log("reverse sorted array ".concat(reverseAlfabaticalOrder));
// again reverse to sho back to origianl condition
reverseAlfabaticalOrder = reverseAlfabaticalOrder.sort();
reverseAlfabaticalOrder = reverseAlfabaticalOrder.reverse();
console.log("again set to orgianl condition the reverse sorted array ".concat(reverseAlfabaticalOrder));
// question 19
// printing the 14 
var excercise14invited = invitaionList.length;
console.log("printing the number of people invited ".concat(excercise14invited));
var excercise18invited = newInvitaionList.length;
console.log("printing the number of people invited ".concat(excercise18invited));
// question 20
// creatng list of mountains, rivers, countries, cities, languages
var listOfCountries = ["USA", "Canada", "Brazil", "China", "India", "Germany"];
var listOfRivers = ["2driya", "3dariya", "4darya"];
// creating object question 21 22
var countries = [
    {
        name: "USA",
        capital: "Washington",
        language: "English"
    },
    {
        name: "Canada",
        capital: "otwa",
        language: "English, French"
    }
];
// question 22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var intentionalErr = [1, 2, 3, 4, 5];
var accessIndex = 2;
if (accessIndex >= 0 && accessIndex < intentionalErr.length) {
    var value = intentionalErr[accessIndex];
    console.log("value index ".concat(accessIndex, " is ").concat(value));
}
else {
    console.log("Error index is intentaoinl error");
}
// Question 23 Conditional Tests 
var car = 'sabaru';
var zero = 0;
// checking condition with data type 
console.log(car === "sabaru" ? true : false);
console.log(car === "tesla" ? true : false);
console.log(car != "mercedesbenz" ? true : false);
console.log(car !== "sabaru" ? true : false);
console.log(zero === 0 ? true : false);
console.log(zero != 0 ? true : false);
// question 24 
// Tests for equality and inequality with strings
console.log('pakistan' === 'pakistan');
console.log('pakistan' !== 'pakistan');
// lower case function
console.log('SAMAD'.toLowerCase() === 'samad');
// number test
var num1 = 5;
var num2 = 9;
console.log(num1 < num2);
console.log(num1 >= num2);
// && OR || 
var x = 50;
var a = 49;
// && operator must check both cond. 
console.log(x > 49 && a < 50);
console.log(x > 49 || a < 50);
var fruits = ['samad', 'abcd', 'bcdef'];
console.log(fruits.includes('samad'));
console.log(fruits.includes('damas'));
// question 25
// alein shotdown in a game
// union type variable hold 3 values
var alein_color;
alein_color = "green";
// alein_color = "yellow"
var points = 5;
// checking green color
if (alein_color === "green") {
    console.log("congratulations you just earned ".concat(points, " points"));
}
// question 26
var greenPoints = 5;
var anotherPoints = 10;
var alien_color1 = "green";
var alein_colorshoot = "green";
if (alien_color1 === alein_colorshoot) {
    console.log("congratulations you have earned ".concat(greenPoints));
}
else {
    console.log("congratulations you have earned ".concat(anotherPoints));
}
// question 27 
// if-else chain.
var alien_colorh;
var gpoints = 5;
var ypoints = 5;
var rpoints = 5;
alien_colorh = 'green';
// alien_colorh = 'yellow';
// alien_colorh = 'red';
if (alien_colorh === 'green') {
    console.log("Congratulations! You just earned ".concat(gpoints, " points for shooting the green alien."));
}
else if (alien_colorh === 'yellow') {
    console.log("Congratulations! You just earned ".concat(ypoints, " points for shooting the yellow alien."));
}
else if (alien_colorh === 'red') {
    console.log("Congratulations! You just earned ".concat(rpoints, " points for shooting the red alien."));
}
// question 28
var age = 5;
if (age < 0) {
    console.log("Error: Age cannot be negative.");
}
else if (age < 2) {
    console.log("The person is a baby.");
}
else if (age < 13) {
    console.log("The person is a child.");
}
else if (age < 20) {
    console.log("The person is a teenager.");
}
else if (age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is a senior citizen.");
}
// question 29
var favorite_fruits = ['banana', 'apple', 'strawberry'];
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}
if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes('kiwi')) {
    console.log("You really like kiwis!");
}
// question 30
var usernames = ['admin', 'Eric', 'John', 'Alice', 'Maria'];
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(usernames[i], ", thank you for logging in again."));
    }
}
// question 31 //
var usernamescheck = [];
if (usernamescheck.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, usernamescheck_1 = usernamescheck; _i < usernamescheck_1.length; _i++) {
        var username = usernamescheck_1[_i];
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
// question 32 // 
var current_users = ['john', 'alice', 'bob', 'mary', 'jane'];
var new_users = ['eric', 'ALICE', 'john', 'michael', 'susan'];
var _loop_1 = function (new_user) {
    var is_existing = current_users.some(function (user) { return user.toLowerCase() === new_user.toLowerCase(); });
    if (is_existing) {
        console.log("Sorry, the username \"".concat(new_user, "\" is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username \"".concat(new_user, "\" is available."));
    }
};
for (var _a = 0, new_users_1 = new_users; _a < new_users_1.length; _a++) {
    var new_user = new_users_1[_a];
    _loop_1(new_user);
}
// Question 33 //
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _b = 0, numbers_1 = numbers; _b < numbers_1.length; _b++) {
    var number = numbers_1[_b];
    var ordinalEnding = void 0;
    if (number === 1) {
        ordinalEnding = 'st';
    }
    else if (number === 2) {
        ordinalEnding = 'nd';
    }
    else if (number === 3) {
        ordinalEnding = 'rd';
    }
    else {
        ordinalEnding = 'th';
    }
    console.log("".concat(number).concat(ordinalEnding));
}
// Queston 34
var favorite_pizzas = ['Pepperoni', 'Margherita', 'BBQ Chicken'];
for (var _c = 0, favorite_pizzas_1 = favorite_pizzas; _c < favorite_pizzas_1.length; _c++) {
    var pizza = favorite_pizzas_1[_c];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("I really love pizza!");
// Question 35
var animals = ['Dog', 'Cat', 'Rabbit'];
for (var _d = 0, animals_1 = animals; _d < animals_1.length; _d++) {
    var animal = animals_1[_d];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
console.log("Any of these animals would make a great pet!");
// Question 36 
function make_shirt(size, message) {
    console.log("The shirt size is ".concat(size, " and the message printed on it is: \"").concat(message, "\"."));
}
// Calling the function
make_shirt('XL', 'Keep calm and code on');
// Question 37
function makeshirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The shirt size is ".concat(size, " and the message printed on it is: \"").concat(message, "\"."));
}
// Making small shirt with default message
makeshirt('large', 'we love you');
// Making medium shirt with default message
// makeshirt('medium');
// Making shirt of any size with a different message
// makeshirt('small', 'Hello World!');
// Question 38
function describe_city(city, country) {
    if (country === void 0) { country = 'default_country'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Calling the function for three different cities
describe_city('Karachi', 'Pakistan');
describe_city('New York', 'USA');
describe_city('Tokyo');
// Question 39
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
var city1 = city_country('Lahore', 'Pakistan');
var city2 = city_country('New York', 'USA');
var city3 = city_country('Tokyo', 'Japan');
console.log(city1);
console.log(city2);
console.log(city3);
// Question 40
function creatingalbuma(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// question 41
function show_magicians(magicians) {
    for (var _i = 0, magiciansa_1 = magiciansa; _i < magiciansa_1.length; _i++) {
        var magician = magiciansa_1[_i];
        console.log(magician);
    }
}
var magiciansa = ['Harry', 'farry ', 'very', 'cary'];
show_magicians(magiciansa);
// Queston 42
function show_magiciansh(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
}
// Array of magician's names
var magicians = ['Harry', 'farry ', 'very', 'cary'];
// Calling the make_great function to modify the list of magicians
make_great(magicians);
// Calling the show_magiciansh function to print the modified list of magicians
show_magiciansh(magicians);
// Queston 43
// create  a function define 
//                          jis array par function chala hai 
function show_magiciansnew(magicianswe) {
    // for ka function ha let suppose ke jis array mai magicinswe 
    for (var _i = 0, magicianswe_1 = magicianswe; _i < magicianswe_1.length; _i++) {
        var magician = magicianswe_1[_i];
        console.log(magician);
    }
}
function make_greatnew(magicianswe) {
    var great_magicianswe = [];
    for (var _i = 0, magicianswe_2 = magicianswe; _i < magicianswe_2.length; _i++) {
        var magician = magicianswe_2[_i];
        // push the value by end 
        great_magicianswe.push("the Great ".concat(magician));
    }
    // return the value jahan call hoga 
    return great_magicianswe;
}
// aray of magincine name 
var magicianswe = ['Harry', 'farry ', 'very', 'cary'];
// calling the makegreatnew with a copy of array
var great_magicians = make_greatnew(__spreadArray([], magicianswe, true));
// showing the old array 
show_magiciansnew(magicianswe);
// showing the new array
show_magicians(great_magicians);
// Quesion 44
function sandWichmaker() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("summary of Sandwich");
    if (items.length === 0) {
        console.log("You haven't selected any items for your sandwich.");
    }
    else {
        console.log("You ordeer a sandwich of follwing item.");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("".concat(item));
        }
    }
}
sandWichmaker("chicke", "cheez");
sandWichmaker("alo", "cheez");
sandWichmaker("fries", "cheez");
// Question 45
// manufacturer name (string), a model name (string)
function storeCarInfo(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Create an object 
    var carInfo = {
        // Setting the manufacturer property to the provided manufacturer name
        manufacturer: manufacturer,
        // Setting the modelName property to the provided model name
        modelName: modelName
    };
    // Iterate over each option provided
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        // Set the property in the carInfo object corresponding to the key provided in the option tuple
        // to the value provided in the option tuple
        carInfo[option[0]] = option[1];
    }
    // Return the carInfo object containing all the car information
    return carInfo;
}
var car1 = storeCarInfo('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);
console.log(car1);
