# Mr.Roboger's Neighborhood

#### By **Winnie Wang**

#### Week 3 Independent Project

[GitHub Pages](https://weijwang18.github.io/Mr.-Roboger-s-Neighborhood/)

## Technologies Used

- HTML/CSS
- JavaScript
- Bootstrap
- JQuery

## Description

This web application takes a number from the user and returns a range of numbers from 0 to the user inputted number with the following substitutions made within the returned range.

- Numbers that contain a 1: all digits are replaced (all digits) with **"Beep!"**
- Numbers that contain a 2: all digits are replaced (all digits) with **"Boop!"**
- Numbers that contain a 3: all digits are replaced (all digits) with **"Won't you be my neighbor?"**

### Hierarchy of Substitutions

These substitutions are written from least to most important!\
The first substitution should apply unless the second does, and the same with the second and third.
In other words, the substitution for the number 1 should apply unless there's a 2 present in the number.
Then, the substitution for the number 2 should apply unless there's a 3 present in the number.

## Setup/Installation Requirements

- You have to have an internet connection for it to work because Boostrap and JQuery are using a **CDN**.
- Clone this repository to your desktop.
- Navigate to the top level of the directory.
- Open index.html in your browser.

## Tests

**Describe: beepBoop()**

**test 1: "It should return an array of numbers from 0 to the user's inputted number"**\
Code: beepBoop(5);\
Expected Output: [0, 1, 2, 3, 4, 5]

**test 2: "It should replace 1 with "Beep!"**\
Code: beepBoop(5);\
Expected Output: [0, "Beep!", 2, 3, 4, 5]

**test 3: "It should replace 11 with "Beep!"**\
Code: beepBoop(11);\
Expected Output: [0, "Beep!", 2, 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!"]

**test 4: "It should replace 2 with "Boop!", replace 1 with "Beep!""**\
Code: beepBoop(5);\
Expected Output: [0, "Beep!", "Boop!", 3, 4, 5]

**test 5: "It should replace 2 with "Boop!", replace 1 with "Beep!", replace 3 with "Won't you be my neighbor?""**\
Code: beepBoop(5);\
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]

**test 6: "It should follow the hierarchy rules."**\
Code: beepBoop(14);\
Expected Output: ["0", "Beep", "Boop", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop", "Won't you be my neighbor?", "Beep!"]

## License

**MIT**

Copyright (c) 2022 **Winnie Wang**
