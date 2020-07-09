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
        teaching: ["math", "science"],
        sayHello: function(){
            let message = this.name + " teaches ";
            this.teaching.forEach(function(e){
                message += e+ " ";
            });
            return message;
        }
    };

    Object.setPrototypeOf(student, user);
    Object.setPrototypeOf(teacher, user);

    student.active = true;

    let newMembers = [teacher, student];

    newMembers.forEach(function(e){
        console.log(e.sayHello());
    });


}

// function doSomething(){
//     return 1 + 1;
// }

// // doSomething -- object.constructor -- doSomething

// let test = new doSomething();

// if(doSomething.prototype === Object.getPrototypeOf(test)){
//     console.log("match");
// }


function Taco(){
    this.toppings = ["cheese"];
}

Taco.prototype.make = function(){
    console.log("Making a taco...");
};


let myTaco = new Taco();
let newTaco = new Taco();