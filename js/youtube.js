{
    let user = {
        active: true
    };

    let student = {
        major: "English"
    };


    let teacher = {
        teaching: ["math", "science"]
    };

    Object.setPrototypeOf(student, user);
    Object.setPrototypeOf(teacher, user);

    student.active = false;
    console.log("teacher", teacher.active);
    console.log("student", student.active);



}