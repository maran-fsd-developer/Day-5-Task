//1.

// for loop
let jsonObject = {
    "name": "mani",
    "age": 22,
    "city": "pudukkottai",
    "work":"developer",
  };
  for (let key in jsonObject) {
    console.log(key + ": " + jsonObject[key]);
  }
  //for in
  let jsonObject = {
    "name": "maran",
    "age":22,
    "city": "pudukkottai",
    "hopi":"cricket",
  };
  for (let key in jsonObject) {
    if (jsonObject.hasOwnProperty(key)) {
      console.log(key + ": " + jsonObject[key]);
    }
  }
  

  //for of
  let jsonObject = {
    "name": "thiru",
    "age": 18,
    "city": "madurai",
    "work":"teaching",
  };
  for (let value of Object.values(jsonObject)) {
    console.log(value);
  }
    //forEach
    let jsonObject = {
        "name": "arun",
        "age": 36,
        "city": "madurai",
        "work":"teaching",
      };
      
      Object.values(jsonObject).forEach(function(value) {
        console.log(value);
      });
      