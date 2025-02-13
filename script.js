var Name = prompt("Enter Your Name:");
var rollNo = prompt("Enter Your Roll NO:")

var HTML  = parseInt(prompt("Enter HTML Marks  (Out of 100)"))
var CSS  = parseInt(prompt("Enter CSS Marks  (Out of 100)"))
var Javascript  = parseInt(prompt("Enter JavaScript Marks  (Out of 100)"))

var totalMarks = 300;
var obtainedMarks = HTML  + CSS  + Javascript;
var percentage = (obtainedMarks / totalMarks) * 100; 

  
alert("Student Name: " + Name + "\n" +
    "Roll Number: " + rollNo + "\n" +
    " HTML Marks: " + HTML + "\n" +
    " CSS Marks: " + CSS + "\n" +
    " Javascript Marks: " + Javascript + "\n" +
    "Total Marks: " + totalMarks + "\n" +
    "Obtained Marks: " + obtainedMarks + "\n" +
    "Percentage: " + percentage.toFixed(2) + "%");