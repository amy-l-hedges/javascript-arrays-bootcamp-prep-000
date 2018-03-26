var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementtoBeginningofArray(array, element) {
   return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.push(element)
}

function accessElementInArray(array, 0) {
  return (array[0])
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(0)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}