//Solutions to Chapter 5 exercises:

// Flattening:

var arrays = [[1, 2, 3], [4, 5], [6]];

//my code here.

var reducedArray = arrays.reduce(function(element, nextElement) {
  return element.concat(nextElement);
});

console.log(reducedArray);

// -> should be [1, 2, 3, 4, 5, 6]

//Mother-Child Age Difference:

