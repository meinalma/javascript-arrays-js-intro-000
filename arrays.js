var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

const array = [1];
function addElementToBeginningOfArray(array, element) {
  newArray = array.unshift('foo');
  return newarray;
}

function destructivelyAddElementToBeginningOfArray(myArray, element) {
  myArray=[1];
  myArray.unshift('foo');
  return myArray;
}