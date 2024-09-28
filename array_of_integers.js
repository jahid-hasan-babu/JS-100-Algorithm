function arrayReplace(inputArray, elementToReplace, substrationElem) {
  inputArray.forEach((element, index) => {
    if (element === elementToReplace) {
      inputArray[index] = substrationElem;
    }
  });
  console.log(inputArray);
}

arrayReplace([1, 2, 1], 1, 3);
