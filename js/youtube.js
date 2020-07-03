{

    function pow (x, y, ...extra) {
        console.log(this);
        console.log(arguments);
        console.log(extra);
        // if(y == undefined) {y = 2}

        // y = typeof y === "undefined" ? 2 : y;
        let total = 1;
        for (let i = 0; i < y; i++) {
            total *= x;
        }
        return total;
    }

    function largest(x, ...extra) {
        let largest = x;
        for(let i = 0; i < extra.length; i++) {
            if(extra[i] > largest){
                largest = extra[i];
            }
        }
        return largest;
    }

    console.log(pow(3, 3, 4, 5, 6, 6));
    

}