function sortedFrequency(arr, num) {
  let leftBd = 0,
    rightBd = arr.length - 1; //set valid search window / bounds

  if (num < leftBd || num > rightBd) return 0; //since it's sorted, return 0 if the num is out of bds

  let leftIdx, rightIdx; //instantiate the two indices we are looking for

  while (leftBd <= rightBd) {
    let pointer = Math.floor((leftBd + rightBd) / 2); //set pointer to center of bounds
    //if pointer is less than num look right
    if (arr[pointer] < num) leftBd = pointer + 1;
    //else if pointer is more than num look left
    else if (arr[pointer] > num) rightBd = pointer - 1;
    //else if pointer is num and has a !num to the left of it THAT is our leftIdx
    else if (arr[pointer] === num && arr[pointer - 1] !== num) {
      leftIdx = pointer;
      break;
    }
    //else look left again
    else rightBd = pointer - 1;
  }
  //search that searches right to find target (target num with !targetNum to the right)
  while (leftBd <= rightBd) {
    let pointer = Math.floor((leftBd + rightBd) / 2); //set pointer to center of bounds
    //if pointer is less than num look right
    if (arr[pointer] < num) leftBd = pointer + 1;
    //else if pointer is more than num look left
    else if (arr[pointer] > num) rightBd = pointer - 1;
    //else if pointer is num and has a !num to the right of it THAT is our rightIdx
    else if (arr[pointer] === num && arr[pointer + 1] !== num) {
      rightIdx = pointer;
      break;
    }
    //else look right again
    else leftBd = pointer + 1;
  }
  //subtract the small index from the large
  return rightIdx - leftIdx + 1;
}

module.exports = sortedFrequency;

//[1, 1, 2, 2, 2, 2, 3]

//think about refactoring only after it works
