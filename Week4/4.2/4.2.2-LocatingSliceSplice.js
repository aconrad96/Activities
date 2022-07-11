const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let FirstA = arr.indexOf("a");
let FirstB = arr.indexOf("b");
let FirstC = arr.indexOf("c");

// find the last index of "a", "b", and "c"
let LastA = arr.lastindexOf("a");
let LastB = arr.lastindexOf("b");
let LastC = arr.lastindexOf("c");
// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
function removeDuplicates(array, dupVal) {
  let firstIndex = array.indexOf(dupVal);
  let lastIndex = array.lastIndexOf(dupVal);
  while (firstIndex !== lastIndex) {
    array.splice(lastIndex, 1);
    let lastIndex = array.lastIndexOf(dupVal);
  }
  return array;
}
console.log(removeDuplicates(arr, "a"));
