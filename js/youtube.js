{
    function pow(x, y) {
        let total = 1; 
        for(let i = 0; i < y; i++) {
            total *= x;
        }
        return total;
    }

    let coolFunctions  = [pow]; 
    // console.log(coolFunctions[0] (3, 3));

    let mathFunctions = {
        power: pow
    };

    console.log(mathFunctions.power(3, 3,))

    pow.description = "Will raise numbers to a power";
    console.log(pow.description);

    function returnAFunction(){
        return pow;
    }

    console.log(returnAFunction()(10,3));

}