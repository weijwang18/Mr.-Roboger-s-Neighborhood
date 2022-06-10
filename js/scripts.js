// Business logic

function countDown(number) {
  const countDownArray = [];
  for (let i = number; i >= 0; i--) {
    countDownArray.push(parseInt(i));
  }
  debugger;
  let output = countDownArray.reverse().toString();
  let outputArray = output.split(",");
  outputArray.forEach(function (digit) {
    if (digit.includes(1) && digit > 0) {
      outputArray[digit] = "Beep!";
    }
  });
  return outputArray;
}

// let digitsArray = number.toString().split("")
//   digitsArray.forEach(function)

// UI logic
$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    const answer = $("input#answer").val();
    if (answer >= 0) {
      $("#result").text(countDown(answer));
    } else {
      alert("Please enter a positive number!");
    }
  });
});
