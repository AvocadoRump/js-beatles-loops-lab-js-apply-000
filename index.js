
function theBeatlesPlay(arr1, arr2) {
  let returnArr = [];
  for (let i=0;i<arr1.length;i++) {
    returnArr.push(arr1[i] + ' ' + arr2[i]);
  }
  return returnArr;
}
