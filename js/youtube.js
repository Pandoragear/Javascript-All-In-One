{
let grades = [12, 4, 4, 66, 7, 9, 33, 4, 6, 43, 43, 43];
grades.length = 30;
grades[34] = 40;

  let largest = grades[0];

  let found = false;
  let serach = 43;


  for(let i = 0; i < grades.length; i++){
    if (grades[i] > largest) {
      largest = grades[i];

      // found == true;
      // console.log(grades[i] + " at index " + i);
      // break;
    }
  }

  console.log(largest);

  // if(found){
  //   //do something
  // }

}