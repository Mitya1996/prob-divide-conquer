function sortedFrequency(arr, num) {
  let boundL = 0,
    boundR = arr.length - 1; //set valid search bounds

  if (num < arr[0] || num > arr[boundR]) return -1; //since it's sorted, return 0 if the num is out of bds

  let pointer, targetL, targetR; //instantiate pointer and the two indices we are looking for

  while (boundL <= boundR) {
    pointer = Math.floor((boundL + boundR) / 2); //set pointer to center of bounds
    //if pointer is less than num look right
    if (arr[pointer] < num) boundL = pointer + 1;
    //else if pointer is more than num look left
    else if (arr[pointer] > num) boundR = pointer - 1;
    //else if pointer is num and has a !num to the left of it THAT is our targetL
    else if (arr[pointer] === num && arr[pointer - 1] !== num) {
      targetL = pointer;
      break;
    }
    //else look left again
    else boundR = pointer - 1;
  }

  (boundL = 0), (boundR = arr.length - 1); //reset valid search window / bounds

  //search that searches right to find target (target num with !targetNum to the right)
  while (boundL <= boundR) {
    pointer = Math.floor((boundL + boundR) / 2); //set pointer to center of bounds
    //if pointer is less than num look right
    if (arr[pointer] < num) boundL = pointer + 1;
    //else if pointer is more than num look left
    else if (arr[pointer] > num) boundR = pointer - 1;
    //else if pointer is num and has a !num to the right of it THAT is our targetR
    else if (arr[pointer] === num && arr[pointer + 1] !== num) {
      targetR = pointer;
      break;
    }
    //else look right again
    else boundL = pointer + 1;
  }
  //subtract the small index from the large
  return targetR - targetL + 1;
}

module.exports = sortedFrequency;

//[1, 1, 2, 2, 2, 2, 3]
