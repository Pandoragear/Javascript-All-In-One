{
    function User(name, interest){
        this.name = name;
        this.interests = interest;
                
    }

    let me = new User("Caleb", ["cooking", "eating", "excercise" ]);
    let you = new User("Camila" ["hotwheels"]);
    console.log(me, you);
    me.membership = "Gold";
    console.log(me);


}