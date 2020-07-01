{
  let grades = [12, 13, 32, 43, 42, 23];
  grades.length = 30;

  // for (let i = 0; i < grades.length; i++){
  //   if(grades[i] !== undefined) 
  //   console.log(grades[i]);
  // }

  grades.forEach(function(element, i, array){
    console.log(element, i, array);
    });

}