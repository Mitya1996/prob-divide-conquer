//binary search the first one that has a zero to the right
function countZeroes(arr) {
  //edge case if all zeros
  if (arr[0] === 0) return arr.length;

  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor((rightIdx + leftIdx) / 2);

    if (arr[midIdx] === 1 && arr[midIdx + 1] === 1) leftIdx = midIdx + 1;
    else if (arr[midIdx] === 0) rightIdx = midIdx - 1;
    else return arr.length - midIdx - 1;
  }
  //return length of zeroes to the right; arr.length - idx - 1; ...ex: [0,0,0]

  return 0;
}

module.exports = countZeroes;
