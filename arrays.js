var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

const array = [1];
function addElementToBeginningOfArray(array, element) {
  newArray = array.unshift('foo');
  return newarray;
}

var myArray=[1];
function destructivelyAddElementToBeginningOfArray(myArray, element) {
  myArray.unshift('foo');
  return myArray;
}