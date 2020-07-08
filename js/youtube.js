{
    console.log(this);
    let arrow = () => this;
    function normal() {
        return this; 
    }

    console.log(arrow());
    console.log(normal());

    console.log("!!!!", this);
    let functions = {
        this: this,
        arrow: arrow, 
        normal: normal,
        arrowTest: () => this
    };

    console.log(functions.arrow());
    console.log(functions.normal());
    console.log(functions.arrowTest());

}