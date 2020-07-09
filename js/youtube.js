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

    let properties = [];

    for(let prop in teacher){
        if(teacher.hasOwnProperty(prop)){
            properties.push(prop);
        }
    }

    console.log(properties);




}
