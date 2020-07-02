{
  // let myDate = new Date();
  // let time = Date.now();
  // console.log(time);

  // let start = Date.now();

  //////////////////////////////////

  // let x = 0;
  // for(let i = 0; i < 100000; i++){
  //   x = x + i;

  // }

  // let end = Date.now();
  // let total = end - start;
  // console.log(`Time took ${total}`);
  // console.log(x);

////////////////////////////////////////

  let before = new Date (2020, 10, 15);
  let after = new Date(2020, 10, 20);

  let oneDay = 1000 * 60 * 60 * 24;
  let days = (after - before) / oneDay;
  console.log(days);

}