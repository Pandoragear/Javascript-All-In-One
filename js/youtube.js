{

    function User(name, interest){
        this.name = name;
        this.interests = interest;

                
    }

    User.prototype.greet = function(){
        console.log("my name is " + this.name, this.interests);
    };

    let me =  new User("Caleb", ["cooking", "eating", "excercise" ]);
    let you = new User("Camila", ["hotwheels"]);
    console.log(me, you);

    me.greet();
    you.greet();


}