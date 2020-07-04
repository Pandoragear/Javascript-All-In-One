{
    function doStuff(input, input2){
        console.log(input, input2);
        console.log(this);
    }

    let me = {name: "Caleb"};
    let newFunction = doStuff.bind(me, 5, 10);

    newFunction();


}