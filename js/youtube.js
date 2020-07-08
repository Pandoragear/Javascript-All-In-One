{

    function fact (x) {
        let total = 1;
        for (let i = x; i > 1; i--) {
            total *= i;
        }
        return total;
    }
    console.log(fact(5));

    document.getElementById("Lemon")
    .onclick = () => {console.log("Clicked")};

    document.getElementById("Lemon")
    .onmouseover = () => {console.log("mouseover")};
    document.getElementById("Lemon")
    .onwheel = () => {console.log("Wheel")};

}