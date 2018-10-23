let max = 1000;
let fizz = 3;
let buzz = 5;
let bang = 7;
let bong = 11;
let fezz = 13;
let output;

function addWord(number) {
  let adding = [];
  let fezzIn = false;
  if (number % fizz == 0) {
    adding.push("Fizz");
  }
  if (number % buzz == 0) {
    adding.push("Buzz");
    fezzIn = true;
  }
  if (number % bang == 0) {
    adding.push("Bang");
    fezzIn = true;
  }
  if (number % bong == 0) {
    adding = ["Bong"];
    fezzIn = true;
  }
  if (number % fezz == 0) {
    if (fezzIn) {
      for (let i = 0; i < adding.length; i++) {
        if (i % buzz == 0 || i % bang == 0 || i % bong == 0) {
          adding.splice(i-1,0,"Fezz");
        }
      }
    } else {
      adding.push("Fezz");
    }
  }
  if (number % 17 == 0) {
    adding.reverse();
  }
  if (adding.length == 0) {
    adding.push(number);
  }
  return adding;
}

for (let i = 1; i <= max; i++) {
  output = addWord(i);
  console.log(output.join(""));
}
