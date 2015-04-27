//Solutions to Chapter 5 exercises:

// Flattening:

var arrays = [[1, 2, 3], [4, 5], [6]];

//my code here:

var reducedArray = arrays.reduce(function(element, nextElement) {
  return element.concat(nextElement);
});

console.log(reducedArray);

// -> should be [1, 2, 3, 4, 5, 6]

//Mother-Child Age Difference:



//Historical Life Expectancy:



//Every and Then Some:

//my code here:

function every(array, test) {
  for (var i = 0; i < array.length; i++)
    if (!test(array[i])) {
      return false;
    };
  return true;
};

function some(array, test) {
  for (var i = 0; i < array.length; i++)
    if (test(array[i])) {
      return true;
    };
  return false;
};

//test cases:

console.log(every([NaN, NaN, NaN], isNaN));
// -> should be true
console.log(every([NaN, NaN, 4], isNaN));
// -> should be false
console.log(some([NaN, 3, 4], isNaN));
// -> should be true
console.log(some([2, 3, 4], isNaN));
// -> should be false

// Whew!
