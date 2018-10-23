let max = 100;
let fizz = 3;
let buzz = 5;

for (let i = 1; i < max; i++) {
  if (i % fizz == 0) {
    console.log("Fizz");
  } else if (i % buzz == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
