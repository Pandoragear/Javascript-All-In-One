{
    let arrow = () => this;
    function normal() {
        return this; 
    }

    console.log(arrow());
    console.log(normal());

    let functions = {
        arrow: arrow, 
        normal: normal
    };

    console.log(functions.arrow());
    console.log(functions.normal());

}