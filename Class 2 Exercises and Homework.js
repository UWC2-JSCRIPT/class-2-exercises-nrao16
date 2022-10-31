// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)


const bestFriend = {
  firstName: 'Paul',
  lastName: 'Smith',
  'favorite food': 'Salad'
}

const me = {
  bestFriend,
  firstName: 'Nandini',
  lastName: 'Rao',
  'favorite food': 'Soup'

}

// 2. console.log best friend's firstName and your favorite food
const {firstName} = me.bestFriend;
console.log(`My best friend's first name is ${firstName},
My favorite food is ${me['favorite food']}
`);


// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
const ticTacToe = [['-', 'O', '-'],
['-', 'X', 'O'],
['X', '-', 'X']];

console.table(ticTacToe);

// 4. After the array is created, 'O' claims the top right square.
// Update that value.
ticTacToe[0][2] = 'O';
console.log(`updated top row: ${ticTacToe[0]}`);

// 5. Log the grid to the console.
console.table(ticTacToe);

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

const emailRegex = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/i;
//true
let myEmail = 'abc@test.com';
console.log(emailRegex.test(myEmail));
myEmail = 'ABC12@Test.NET';
console.log(emailRegex.test(myEmail));

//false
myEmail = 'abctest.com';
console.log(emailRegex.test(myEmail));
myEmail = 'abc@testcom';
console.log(emailRegex.test(myEmail));
myEmail = 'abc@_test.com';
console.log(emailRegex.test());
myEmail = ' abc@test.com '
console.log(emailRegex.test(myEmail));
myEmail = `abc@ mall`;
console.log(emailRegex.test(myEmail));

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';
const dateRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

let [dateString, month, day, year] = dateRegex.exec(assignmentDate);
console.log(`assigmentDate: ${dateString}, month: ${month}, day: ${day}, year: ${year}`);
const convertedAssignmentDate = new Date(year, month -1, day);
console.log(`converted assignmentDate: ${convertedAssignmentDate}`);

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
const dueDate = new Date(convertedAssignmentDate);
dueDate.setDate(dueDate.getDate() + 7);

console.log(`dueDate: ${dueDate}`);

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const [dueDateMonth, dueDateDate, dueDateFullYear] = [dueDate.getMonth(), dueDate.getDate(), dueDate.getFullYear()];

const timeTag = `<time datetime="${dueDateFullYear}-${(dueDateMonth+1).toString().padStart(2,'0')}-${(dueDateDate).toString().padStart(2,'0')}">${months[dueDateMonth]} ${dueDateDate}, ${dueDateFullYear}</time>`;

// 10. log this value using console.log
console.log(`time tag: ${timeTag}`);