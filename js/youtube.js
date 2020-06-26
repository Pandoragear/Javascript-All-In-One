{
  let position = {
    x: 10, 
    y: 20,
    print: function (){
      console.log(`X: ${this.x}, y: ${this.y}`);
    },

    myObject: { 
      sweetProperty: "hello Friends"

    }
    
  }

  // let myPosition = position; 

  // console.log(position);
  // console.log(myPosition);

  // myPosition.x = 15;

  // console.log(position);
  // console.log(myPosition);

  function print (){
    console.log(`X: ${this.x}, y: ${this.y}`);  //undefined
  }

  print();
  position.print();
  position.myObject.sweetProperty;

}