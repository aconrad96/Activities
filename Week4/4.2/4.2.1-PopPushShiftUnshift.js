const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let popReturn = nums.pop();
let popReturn1 = nums.pop();

// remove each of the first two items with shift(), saving each item to a variable
let shiftReturn = nums.shift();
let shiftReturn1 = nums.shift();

// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(shiftReturn1, shiftReturn);
nums.unshift(popReturn1, popReturn);

console.log(nums);
