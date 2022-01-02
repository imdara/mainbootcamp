// Question -
// How to compare two JSON have the same properties without order?
// var obj1 = { name: "Person 1", age:5 };
// var obj2 = { age:5, name: "Person 1" };

// Answer -
// Lodash isEqual() method is the best way to compare two JSON objects.

// This will not consider the order of the keys in object and check for the equality of object.

// Code -
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("both objects are equal: "+flag);

// Question -
// Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console.

// Answer/Code -
var xhr = new XMLHttpRequest();

// Open a request
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.onload = function () {
  //please provide me data if my request lies in range 200-299
  if (xhr.status >= 200 && xhr.status < 300) {
    let data = JSON.parse(this.response);
    for (let i = 0; i < data.length; i++) {
      let user = data[i];
     console.log(user.flag);
   }
  }
};

 xhr.send();

// Question -
// Use the same rest countries and print all countries name, region, sub region and population.

// Answer/Code -
var xhr = new XMLHttpRequest();

// Open a request
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.onload = function () {
  //please provide me data if my request lies in range 200-299
  if (xhr.status >= 200 && xhr.status < 300) {
    let data = JSON.parse(this.response);
    for (let i = 0; i < data.length; i++) {
      let user = data[i];
     console.log( `name:${user.name},region:${user.region},sub region:${user.subregion}, population:${user.population}`); 
   }
  }
}
xhr.send();
