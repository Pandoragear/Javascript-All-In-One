{
    var input = Number(prompt("Put in a DECIMAL number"));

//     console.log("Decimal    :", input);
//     console.log("Binary     :", Number.parseInt(input, 2));
//     console.log("Octal      :", Number.parseInt(input, 8));
//     console.log("Hex        :", Number.parseInt(input, 16));

    console.log(input + " in decimal to decimal:", input);
    console.log(input,  " in decimal to binary:", input.toString(2));
    console.log(input,  " in decimal to octal:", input.toString(8));
    console.log(input,  " in decimal to hex:", input.toString(16));

}