// Business logic

function beepBoop(number) {
  let countDownArray = [];
  for (let i = number; i >= 0; i--) {
    countDownArray.push(i);
  }
  return countDownArray.reverse();
}

// let digitsArray = number.toString().split("")
//   digitsArray.forEach(function)

// UI logic
$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    const answer = $("input#answer").val();
    $("#result").text(beepBoop(answer));
  });
});
