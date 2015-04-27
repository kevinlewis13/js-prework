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

var guys = [{name: "Kevin", died: 1920}, {name: "William", died: 1850}];

var diedIn = function(array) {

  for (i = 0; i < array.length; i++) {
    array[i].century = Math.ceil(array[i].died / 100)
    console.log(array[i].century);
  };
};

diedIn(guys);

console.log(guys[1].century);

//this adds the century to the object. I need to refer to the composability section next to filter by century and map ages. I don't think this will get me all the way there yet though.

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
