{
  // let password;
  // do {
  //   password = prompt("What is the passcode?");
  // }while(password.toLowerCase() !== "let me in");

  let myString = "Search this string baby";
  let chartoSearch = "c";
  for (let i = 0; i <myString.length; i++) {
    if(myString[i] === chartoSearch){
      console.log(myString[i] + " is found at index " + i);
    }
  }

}