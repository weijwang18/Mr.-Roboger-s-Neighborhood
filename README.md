# Mr.-Roboger-s-Neighborhood

#### By _**Winnie Wang**_

#### _Week 3 Independent Project_

## Technologies Used

- _HTML/CSS_
- _JavaScript_
- _Bootstrap_
- _JQuery_

## Description

_This web application takes a number from the user and returns a range of numbers from 0 to the user inputted number with the following substitutions made within the returned range._
_Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"_
_Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"_
_Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"_

## Setup/Installation Requirements

- _You have to have an internet connection for it to work because Boostrap and JQuery are using a CDN._
- _Clone this repository to your desktop._
- _Navigate to the top level of the directory._
- _Open index.html in your browser._

## License

_MIT_

Copyright (c) _2022_ _Winnie Wang_

Describe: beepBoop()

test 1: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

test 2: "It should say "Please enter a positive number" if the user enters a negative number
Code: beepBoop(15);
Expected Output: "Please enter a positive number"
