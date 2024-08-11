//! 1.Create your resume data in JSON format.
//!RESUME
let myResume={
  "personal details": {
    "name": "MANIMARAN S",
    "email": "rameshmaran66@gamil.com",
    "phone": 9344251205,
    "degree": "Bsc",
    "location": {
      "address": "5/91",
      "vilage": "perungadu",
      "post":"melmangalam",
      "taluk":"aranthangi",
      "district":"pudukkottai",
      "pinCode": 614616,
      "state": "Tamilnadu",
      "country": "India"
    },
    "profiles": [
      {
        "website": "https://www.linkedin.com/in/manimaran-s-5b84a7253/",
        "github":"https://github.com/maran-fsd-developer"
      }
    ]
  },
  "education": [
    {
      "institution": "BHARATHIDSAN UNIVERSITY",
      "department": "computer science",
      "studyType": "fulltime",
      "batch start year": 2019,
      "batch end year": 2022,     
     "percentage": 78
    }
  ],
  "technical skills":["javascrit",
  "html","css","mongodb","expressjs","nodejs","github","bootstrap" ],
  "languages": [
    {
      "language": "Tamil,Enlish",
    }
  ],
  "interests": [
    {
      "name": "script writter,cricketer,",
    }
  ]
}
console.log(myResume);
//! 2.For the above JOSN,iterate over all for loops(for,for in,for of,forEach)
//! For
const data = {
  "name": "MANIMARAN",
  "age": 22,
  "degree": "BSC(computer science)",
  "address": {
    "street": "vengur",
    "village": "aranthangi",
    "state": "tamilnadu"
  },
  "hobbies": ["writing", "cricket", "traveling"]
};

for (let i = 0; i < data.hobbies.length; i++) {
  console.log(data.hobbies[i]);
}

//! For in
for (let key in data.address) {
  console.log(`${key}: ${data.address[key]}`);
}
//! For of
for (let hobby of data.hobbies) {
  console.log(hobby);
}
//! For Each
const keys = ["name", "age", "degree"];

keys.forEach(key => {
  console.log(`${key}: ${data[key]}`);
});







































