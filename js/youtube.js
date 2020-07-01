{
  let grades = [
    [12, 13, 32, 43, 42, 23],
    [12, 43, 21, 12, 43, 12],
    [43, 12, 43, 12, 45, 12]
  ];

  // for(let i = 0; i < grades.length; i++) {
  //   for(let k = 0; k < grades[i].length; k++ ) {
  //     console.log(grades[i] [k]);
  //   }
  //   console.log("------")
  // }

  grades.forEach(function(row){
      row.forEach(function(col){
        console.log(col);
      });
      console.log("----");
    });

}