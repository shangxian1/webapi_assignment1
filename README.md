# Assignment 1: Class Scheduler Application
Class scheduler is a simple Node.js module to manage classes in a timetable in a school system. It allows users to add, remove and search for classes and tutors.

# Getting Started
## Prerequisites
Ensure that you have Node.js installed to run this node module.
[node.js]([url](https://nodejs.org/en))

Only one file is required for this assignment:

ShangXian_classes.js – This is the class scheduler Node.js module.

# How to use
## 1. Installation
- Create a file called app.js within the installation folder to test the node module.
- Add the following code to the top of the page
  
  ```js
  const timetableController = require("./ShangXian_classes.js");
  ```
- Type the following into the terminal to start using the node module
  
  ```
  node app.js
  ```

## Example of `app.js`

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

# 2. Features 
## 1. Add classes with module name, module code, date, time and tutor
  - Function 1 allows users to add classes into their schedule by passing the parameters: modName, modCode, date, time and tutor
  - ```js
    timetableController.addClass(modName, modCode, date, time, tutor);
    ```
### Example of Feature 1
```js
      const addedClass = timetableController.addClass("Workplace Digital Skills","EGC155","11/11/2025", "2:00","Siew Peng Shorn");
      console.log(addedClass + " added!");
```
2. Reschedule classes
3. Search classes by module name
4. Cancel classes
5. List all classes


  
# References
[PoliteMall]([url](https://politemall.polite.edu.sg/catalog?pagename=Home))
[MyNYP Portal]([url](https://mynypportal.nyp.edu.sg/en.html))
