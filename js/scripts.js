// Business logic

function beepBoop(number) {
  const countDownArray = [];
  for (let i = number; i >= 0; i--) {
    countDownArray.push(parseInt(i));
  }
  let outputArray = countDownArray.reverse().toString().split(",");
  outputArray.forEach(function (digit) {
    debugger;
    if (digit.includes("3") && digit > 0) {
      outputArray[digit] = "Won't you be my neighbor?";
    } else if (digit.includes("2") && digit > 0) {
      outputArray[digit] = "Boop!";
    } else if (digit.includes("1") && digit > 0) {
      outputArray[digit] = "Beep!";
    }
  });
  return outputArray;
}

// UI logic
$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    const answer = $("input#answer").val();
    if (answer >= 0) {
      $("#result").text(beepBoop(answer));
      $(".card").show();
    } else {
      alert("Please enter a positive number!");
    }
  });
});
