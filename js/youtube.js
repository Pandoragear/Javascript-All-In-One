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

    function Teacher() {
        this.name = "Caleb Curry";
        this.teaching = ["math", "science"];
    }



    let student = new Student("peasant student", "English");
    let teacher = new Teacher("Caleb Curry", ["math", "science"]);

    console.log(student, teacher);






}
