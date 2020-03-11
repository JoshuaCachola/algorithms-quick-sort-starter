function quickSort(array) {
  // if the length of the array is 0 or 1, return the array

  // set the pivot to the first element of the array
  // remove the first element of the array

  // put all values less than the pivot value into an array called left
  // put all values greater than the pivot value into an array called right

  // call quick sort on left and assign the return value to leftSorted
  // call quick sort on right and assign the return value to rightSorted

  // return the concatenation of leftSorted, the pivot value, and rightSorted

  if (array.length === 0 || array.length === 1) {
    return array;
  }

  let pivot = array.shift();
  let left = [];
  let right = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);

  return leftSorted
    .concat(pivot)
    .concat(rightSorted);
}


module.exports = {
  quickSort
};
