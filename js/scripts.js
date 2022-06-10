// Business logic

function beepBoop(number) {
  let countDownArray = [];
  for (let i = number; i >= 0; i--) {
    countDownArray.push(i);
  }
  return countDownArray.reverse();
}

console.log(countDownArray(5));

// let digitsArray = number.toString().split("")
//   digitsArray.forEach(function)
