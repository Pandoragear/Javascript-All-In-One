{
    let user = {
        active: false,
        sayHello: function(){
            return this.name + " says hi!";
        }
    };

    let student = {
        name: "Peasant student",
        major: "English"
    };


    let teacher = {
        name: "Caleb Curry",
        teaching: ["math", "science"]
    };

    Object.setPrototypeOf(student, user);
    Object.setPrototypeOf(teacher, user);

    student.active = true;

    console.log("teacher", teacher.sayHello());
    console.log("student", student.sayHello());



}