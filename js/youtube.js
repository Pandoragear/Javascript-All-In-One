{
    function User() {
        this.active = false; 
    }

    User.prototype.sayHello = function(){
        return this.name + " say hi!";
    };

    function Student(name, major) {
        this.name = name; 
        this.major = major;  
    }

    Student.prototype = new User();

    function Teacher(name, teaching) {
        this.name = name;
        this.teaching = teaching;
    }


    Teacher.prototype = new User();
    Teacher.prototype.sayHello = function(){
        return "Teacher says hi!";
    }

    let student = new Student("peasant student", "English");
    let teacher = new Teacher("Caleb Curry", ["math", "science"]);

    console.log(student, teacher);




}
