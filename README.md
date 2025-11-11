# Assignment 1: Class Scheduler Application
Class scheduler is a simple Node.js module to manage classes in a school system. It allows users to add, remove, search and displays classes.

# Getting Started
## Prerequisites
Ensure that you have Node.js installed to run this node module.

[node.js](https://nodejs.org/en)

Only one file is required for this assignment:

ShangXian_classes.js – This is the class scheduler Node.js module.

# How to use
## 1. Installation
#### Create a file called app.js within the installation folder to test the node module.

Example folder structure:

assignment1/ 
- app.js
- ShangXian_classes.js
- README.md

#### Add the following code to the top of app.js file
  
  ```js
  const timetableController = require("./ShangXian_classes.js");
  ```
#### Type the following into the terminal to start using the node module
  
  ```
  node app.js
  ```

#### Example of `app.js`

```js
const timetableController = require("./ShangXian_classes.js");

// Add Class
console.log("");
const addedClass = timetableController.addClass("Workplace Digital Skills", "EGC155", "2:00", "Siew Peng Shorn");
console.log(addedClass + " added!");
console.log("");

// List all classes
console.log("Classes list:");
timetableController.listClass().forEach((cls, index) => {
  console.log(`${index + 1}. ${cls.modName} [${cls.modCode}] - Date: ${cls.date} | Time: ${cls.time} / Tutor: ${cls.tutor}`);
});
console.log("");

// Find class by modName
const mod = timetableController.findByModName("electronics");
console.log("Search Results:");
mod.forEach((cls, index) => {
  console.log(`${index + 1}. ${cls.modName} [${cls.modCode}] - Date: ${cls.date} | Time: ${cls.time} / Tutor: ${cls.tutor}`);
});
console.log("");

// Remove class by modCode
const remove = timetableController.removeClass("EGC155");
console.log(`Removed class: ${remove.modName} [${remove.modCode}]`);
console.log("");

// List classes to show updated classes
console.log("Remaining classes:");
timetableController.listClass().forEach((cls, index) => {
  console.log(`${index + 1}. ${cls.modName} [${cls.modCode}] - Date: ${cls.date} | Time: ${cls.time} / Tutor: ${cls.tutor}`);
});
console.log("");

// Reschedule classes
timetableController.rescheduleClass("Calculus", "12/11/2025", "09:30");

// List classes to show rescheduled class
console.log("Updated timetable:");
timetableController.listClass().forEach((cls, index) => {
  console.log(`${index + 1}. ${cls.modName} [${cls.modCode}] - Date: ${cls.date} | Time: ${cls.time} / Tutor: ${cls.tutor}`);
});
console.log("");
```

# 2. Functions 
## 1. Add classes
#### Function 1 allows students to add classes into their schedule by passing following the parameters: modName, modCode, date, time and tutor
  ```js
  timetableController.addClass(modName, modCode, date, time, tutor);
  ```
#### Example of Function 1

  ```js
  const addedClass = timetableController.addClass("Workplace Digital Skills","EGC155","11/11/2025", "2:00","Siew Peng Shorn");
  ```

## 2. Reschedule classes
#### Function 2 allows students to reschedule their classes by changing the date and time of their class 
  
  ```js
  timetableController.rescheduleClass(modName, date, time);
  ```
#### Example of Function 2

  ```js
  timetableController.rescheduleClass("Calculus", "12/11/2025", "09:30");
  ```

## 3. Search classes
#### Function 3 allows students for their classes by the module name
  
  ```js
  timetableController.searchClass(modName);
  ```
#### Example of Function 3

  ```js
  timetableController.searchClass("Digital Electronics");
  ```

## 4. Cancel classes
#### Function 4 allows students cancel their classes by passing the parameter modName into the function
  
  ```js
  timetableController.removeClass(modName);
  ```
#### Example of Function 4

  ```js
  timetableController.removeClass("Workplace Digital Skills");
  ```

## 5. List classes
#### Function 5 allows students list out all their classes  

#### Example of Function 5

  ```js
  timetableController.listClass();
  ```




# References
[PoliteMall](https://politemall.polite.edu.sg/catalog?pagename=Home)

[MyNYP Portal](https://mynypportal.nyp.edu.sg/en.html)
