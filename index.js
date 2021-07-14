// print hello world
console.log('hello world');


//write a fucntion that prints numbers from 0 to 100.
//for multiples of three print "fizz" instead of the number and for the multiples of five print "buzz".
//for numbers which are multiples of both three and five print "fizzbuzz".


function fizzbuzz() {
  for (var i = 0; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

fizzbuzz();

//AI is bananas 
