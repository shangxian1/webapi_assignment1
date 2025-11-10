//Timetable management system

module.exports = {
    //Classes list "Database"
    classes: [
        { modName: "Calculus", modCode: "EGC170", time: "8:00", tutor: "Lily Soh" },
        { modName: "Digital Electronics", modCode: "EGC180", time: "10:00", tutor: "Goh Eng Siong" },
        { modName: "Electronics Devices & Applications", modCode: "EGC181", time: "12:00", tutor: "Patrick D Cruz" }
    ],

    //Function 1: Add classes
    addClass(modName, modCode, time, tutor) {
        this.classes.push({ modName: modName, modCode: modCode, time: time, tutor: tutor });
        return (modName);
    },

    //Function 2: List all classes
    listClass() {
        return this.classes;
    },

    //Function 3: Find class by modName
    findByModName(modName) {
        return this.classes.filter(
            c => c.modName.toLowerCase().includes(modName.toLowerCase())
        );
    },

    //Function 4: Remove class by modCode
    removeClass(modCode) {
        const index = this.classes.findIndex(c => c.modCode === modCode);
        const removed = this.classes.splice(index, 1);
        return removed[0];
    },

    //Function 5: Get number of classes
    getClass() {
        return this.classes.length;
    },

    //Function 6: Get tutors
    getTutors() {
        return [...new Set(this.classes.map(c=>c.tutor))];
    }

};  