// JavaScript-Assessment-1 ... numbers.js

// 1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;
var total = num10 + parseInt(string8) + one;
console.log("Numbers 1: " + total);

//2. write a loop that will log only numbers divisible by 3 between 20 - 100
function divByThree() {
    for (i = 20; i <= 100; i++) {
        if (i % 3 === 0) console.log("Numbers 2: " + i + " is divisible by 3");
    }
};
divByThree();

//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98];
function aveScores() {
    var total = 0;
    var ave = 0;
    for (i = 0; i < scores.length; i++) {
        total += scores[i];
        ave = total / (1 + i);
        // console.log(scores[i] + "| Sum:" + total + "| Running Average:" + ave);
    }
    // console.log("Average Score is " + ave);
    return ave;
};
console.log("Numbers 3: Average score is " + aveScores());
