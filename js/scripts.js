// Business logic

function countDown(number) {
  const countDownArray = [];
  for (let i = number; i >= 0; i--) {
    countDownArray.push(i);
  }
  const reverse = countDownArray.reverse();

  reverse.forEach(function (number) {
    debugger;
    if (reverse.includes(1)) {
      reverse.replace(number, "Beep");
      return reverse;
    } else {
      return reverse;
    }
  });
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
