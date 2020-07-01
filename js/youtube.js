{
  let grades = [
    [12, 13, 32, 43, 42, 23],
    [12, 43, 21, 12, 43, 12, 54, 23, 12, 22, 56],
    [43, 12, 43, 12, 45, 12]
  ];

  outerLoop: for(let i = 0; i < grades.length; i++) {
    for(let k = 0; k < grades[i].length; k++ ) {
      console.log(grades[i] [k]);
        if(grades[i][k] === 54){
          console.log("You found the value");
          break outerLoop;
        }
          console.log("doing stuff");
    }
    console.log("------") // this code is ignored with continue outerloop because
    //this code is not ingored with a break
  }



  // grades.forEach(function(row){
  //     row.forEach(function(col){
  //       console.log(col);
  //     });
  //     console.log("----");
  //   });

}