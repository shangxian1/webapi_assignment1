//Class scheduler
module.exports = {
    //Classes list
    classes: [
        { modName: "Calculus", modCode: "EGC170", date:"10/11/2025", time: "8:00", tutor: "Lily" },
        { modName: "Digital Electronics", modCode: "EGC180", date:"11/11/2025", time: "10:00", tutor: "John" },
        { modName: "Electronics Devices & Applications", modCode: "EGC181", date:"12/11/2025", time: "12:00", tutor: "Patrick" },
        { modName: "Programming", modCode: "EGC151", date:"13/11/2025", time: "4:00", tutor: "Tom" }
    ],

    //Function 1: Add classes
    addClass(modName, modCode, date, time, tutor) {
        this.classes.push({ modName: modName, modCode: modCode, date: date, time: time, tutor: tutor });
        return (modName);
    },

    //Function 2: Reschedule classes
    rescheduleClass(modName, newDate, newTime){
        const cls = this.classes.find(c => c.modName === modName);
        cls.date = newDate;
        cls.time = newTime;
    },

    //Function 3: Search class
    searchClass(modName) {
        return this.classes.filter(
            c => c.modName.toLowerCase().includes(modName.toLowerCase())
        );
    },

    //Function 4: Cancel class
    removeClass(modName) {
        const index = this.classes.findIndex(c => c.modName === modName);
        const removed = this.classes.splice(index, 1);
        return removed[0];
    },

    //Function 5: Get number of classes
    listClass() {
        return this.classes;
    },
};  