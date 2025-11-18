# Assignment 1: Class Scheduler Application
Class scheduler is a simple Node.js module to manage classes in a school system. This module allows students to manage their class schedules by adding, removing, rescheduling, searching for classes.

# Prerequisites
#### Ensure that you have Node.js installed to run this node module.

[node.js](https://nodejs.org/en)


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
  const classController = require("./ShangXian_classes.js");
  ```
#### Type the following into the terminal to start using the node module
  
  ```
  node app.js
  ```

#### Example of `app.js`

```js
const classController = require("./ShangXian_classes.js");

// Add Class
console.log("");
const addedClass = classController.addClass("Workplace Digital Skills", "EGC155", "10/11/2025","2:00","Jim");
console.log(addedClass + " added");
console.log("");

// Reschedule classes
classController.rescheduleClass("Calculus", "12/11/2025", "09:30");
// List classes to show rescheduled class
console.log("Updated timetable:");
classController.listClass().forEach((cls, index) => {
  console.log(`${index + 1}. ${cls.modName} [${cls.modCode}] - Date: ${cls.date} | Time: ${cls.time} / Tutor: ${cls.tutor}`);
});
console.log("");

// Find class by modName
const mod = classController.searchClass("electronics");
console.log("Search Results:")
mod.forEach((cls, index) => {
  console.log(`${index + 1}. ${cls.modName} [${cls.modCode}] - Date: ${cls.date} | Time: ${cls.time} / Tutor: ${cls.tutor}`)
});
console.log("");

// Remove class by modCode
const remove = classController.removeClass("Workplace Digital Skills");
console.log(`Removed class: ${remove.modName}`);
console.log("");

// List all classes
console.log("Classes list:")
classController.listClass().forEach((cls, index) => {
  console.log(`${index + 1}. ${cls.modName} [${cls.modCode}] - Date: ${cls.date} | Time: ${cls.time} / Tutor: ${cls.tutor}`);
});
console.log("");

```

#### Sample data for classes

  ```js
  classes: [
        { modName: "Calculus", modCode: "EGC170", date:"10/11/2025", time: "8:00", tutor: "Lily" },
        { modName: "Digital Electronics", modCode: "EGC180", date:"11/11/2025", time: "10:00", tutor: "John" },
        { modName: "Electronics Devices & Applications", modCode: "EGC181", date:"12/11/2025", time: "12:00", tutor: "Patrick" },
        { modName: "Programming", modCode: "EGC151", date:"13/11/2025", time: "4:00", tutor: "Tom" }
    ],
  ```

# 2. Functions 
## 1. Add classes
#### Function 1 allows students to add classes into their schedule by passing following the parameters: modName, modCode, date, time and tutor
  ```js
  timetableController.addClass(modName, modCode, date, time, tutor);
  ```
#### Example of Function 1

  ```js
  classController.addClass("Workplace Digital Skills","EGC155","11/11/2025", "2:00","Timmy");
  ```

## 2. Reschedule classes
#### Function 2 allows students to reschedule their classes by changing the date and time of their class 
  
  ```js
  classController.rescheduleClass(modName, date, time);
  ```
#### Example of Function 2

  ```js
  classController.rescheduleClass("Calculus", "12/11/2025", "09:30");
  ```

## 3. Search classes
#### Function 3 allows students to search for their classes by the module name
  
  ```js
  classController.searchClass(modName);
  ```
#### Example of Function 3

  ```js
  classController.searchClass("Digital Electronics");
  ```

## 4. Cancel classes
#### Function 4 allows students to cancel their classes
  
  ```js
  classController.removeClass(modName);
  ```
#### Example of Function 4

  ```js
  classController.removeClass("Workplace Digital Skills");
  ```

## 5. List classes
#### Function 5 allows students list out all their classes  

  ```js
  classController.listClass();
  ```




# References
[PoliteMall](https://politemall.polite.edu.sg/catalog?pagename=Home)

[MyNYP Portal](https://mynypportal.nyp.edu.sg/en.html)

[JS findIndex](https://www.w3schools.com/jsref/jsref_findindex.asp)

[JS Splice](https://www.w3schools.com/jsref/jsref_splice.asp)

