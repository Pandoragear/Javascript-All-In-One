{
    //Constructor Function 
    function User(name, interest){
        this.name = name;
        this.interests = interest;
                
    }

    //Factory Function 
    function newUser(name, interest) {
        let person = {
            name: name,
            interest: interest
        };

        return person; 
    }

    // Constructor Function Output 
    // let me = new User("Caleb", ["cooking", "eating", "excercise" ]);
    // let you = new User("Camila" ["hotwheels"]);
    // console.log(me, you);
    // me.membership = "Gold";
    // console.log(me);


    // Factory Function Output
    let me =  newUser("Caleb", ["cooking", "eating", "excercise" ]);
    let you = newUser("Camila" ["hotwheels"]);
    console.log(me, you);
    me.membership = "Gold";
    console.log(me);


}