{
  // let password;
  // do {
  //   password = prompt("What is the passcode?");
  // }while(password.toLowerCase() !== "let me in");

  let myString = "cSearch this c string cc baby";
  let chartoSearch = "c";
  for (let i = 0; i <myString.length; i++) {
    if( myString[i] === 'a' || myString[i] === 'e' || 
        myString[i] === 'i' || myString[i] === 'o' || 
        myString[i] === 'u'){
      continue;
    }
    console.log(myString[i]);
  }

}