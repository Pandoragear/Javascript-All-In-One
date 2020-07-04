{

let me = {
    name: "Caleb",
    outputMe: function(){
        console.log(this);
        console.log(this.name);
        
    }
};

     function outputMe(){
        'use strict';
    console.log(this);

}

    function outputMeStrict(){
        'use strict';
        console.log(this);
    }

    function Person(){
        console.log(this);
        this.name = "Caleb";
        console.log(this);

    }

    me.outputMe();   //method
    outputMe();     //function
    outputMeStrict();  // function strict
    let person  = new Person(); // ctor
    console.log(person);

}