//Timetable management system

module.exports = {
    //Classes list "Database"
    classes:[
        { modName: "Calculus", modCode: "EGC170", time:"8:00", tutor: "Lily Soh" },
        { modName: "Digital Electronics", modCode: "EGC180", time:"10:00", tutor: "Goh Eng Siong" },
        { modName: "Electronics Devices & Applications", modCode: "EGC181", time:"12:00", tutor: "Patrick D Cruz" }
    ],

    //Function 1: Add classes
    addClass(modName,modCode,time,tutor){
        this.classes.push({modName:modName,modCode:modCode,time:time,tutor:tutor});
        return(modName);
    },

    //Function 2: List all classes
    listClass(){
        return this.classes;
    },

    //Function 3: Find class by modName
    findByModName(modName){
        return this.classes.filter(
            c => c.modName.toLowerCase().includes(modName.toLowerCase())
        );
    }
};  