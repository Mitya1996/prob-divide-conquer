/**
 * Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.
 * @param {!Array} arr
 * @param {!number} x
 * @return {!number}
 */

function findFloor(arr, x) {
  //binary search
  let left = 0;
  let right = arr.length - 1;
  let mid = (right + left) / 2;
  while (left < right) {
    //if mid is > x and the number to the left of mid is less than x return num to the left of mid
    if (mid > x && arr[mid - 1] < x) return arr[mid - 1];
    //if the last num in the array is smaller than x return the last num in arr
    if (arr[arr.length - 1] < x) return arr[arr.length - 1];
    //if the number to the left is smaller than x, then eliminate left side / aka mid+1 is the new left
    if (arr[mid - 1] < x) {
      left = mid + 1;
    }
    //if the number to the left is bigger than x, then eliminate the right side / mid-1 is the new right
    else if (arr[mid - 1] > x) {
      right = mid - 1;
    }
    console.log(left);
    console.log(right);
    console.log(mid);
  }
}

module.exports = findFloor;
