var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 ,
    displayObj:function(){
        console.log(`Name is ${this.name} and class is ${this.sclass} and his roll no. is ${this.rollno}`);

    }
};
console.log("Before deleting:");
student.displayObj();

delete student.rollno;
console.log("After deletion:");
student.displayObj();

