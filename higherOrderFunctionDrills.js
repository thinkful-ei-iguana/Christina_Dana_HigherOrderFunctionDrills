function repeat(fn, n) {
  [...Array(n)].forEach(x =>fn());  
}
let hello = function (){console.log('Hello World.');}
let goodbye = function (){console.log('Goodbye World.');}

function filter(arr, fn) {
  let newArray = [];
  for(let i = 0; i < arr.length; i++){
    const currentElement = arr[i];
   if (fn(currentElement)){
    newArray.push(currentElement);

   } 
   
  }
  return newArray;



    // TASK: Define your function here
}
console.log

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


function hazardWarningCreator (typeOfWarning){
  let warningCounter = 0;
  return function (location){
      warningCounter++;
      console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!
      The ${typeOfWarning} hazard alert has triggered ${warningCounter} time${warningCounter>1?'s':''} today!`);
  }

}

const rocksWarning = hazardWarningCreator('rocks Warning');
rocksWarning('All of California');
rocksWarning('Wisconsin');
rocksWarning('Bundy Ave');
rocksWarning('Great Lakes Area');

const cuddlyCatsWarning = hazardWarningCreator('careful, cuddle pile ahead');
cuddlyCatsWarning('All of California');
cuddlyCatsWarning('Catalina Island');
cuddlyCatsWarning('Cat Cafe');

const sithLordWarning = hazardWarningCreator('I find your lack of faith Unnerving.');
sithLordWarning('On dah Bridge');
sithLordWarning('On Tatooine');
sithLordWarning('In dah pawty bus');

repeat(hello,5);
repeat(goodbye,5);


let movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

movements.filter(movement => movement[0] >= 0 && movement[1] >= 0);

let steps = movements.map(movement => Math.abs(movement[0]) + Math.abs(movement[1]));

steps.forEach(step => { 
  console.log(step);
}
);

