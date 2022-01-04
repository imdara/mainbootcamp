// Question -
// https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

// Answer/Code -
class movie {
  constructor( title, studio, rating = "PG" ){
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  static getPG(arr){
  let PgMovies=[];
  for (let i = 0; i < arr.length; i++){
  if (arr[i].rating == "PG")
  PgMovies.push(arr[i]);
  }
  console.log(PgMovies);
}
}

let movie1 = new movie( "Casino Royale", "Eon Productions", "PG-13" );
let movie2 = new movie( "The Avengers", "Marvel Studios", "PG-13" );
let movie3 = new movie ( "Fight Club", "20th Century Studios", "R" );
let movie4 = new movie ( "Ice Age", "20th Century Studios" );
let movie5 = new movie ( "Ice Age 2", "20th Century Studios", "PG" );

let arrayOfMovies = [ movie1, movie2, movie3, movie4, movie5 ];

movie.getPG(arrayOfMovies);

//Output =>
// [
//   movie {
//     title: 'Ice Age',
//     studio: '20th Century Studios',
//     rating: 'PG'
//   },
//   movie {
//     title: 'Ice Age 2',
//     studio: '20th Century Studios',
//     rating: 'PG'
//   }
// ]

// Question -
// https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

// Answer/Code -
class Circle{
  getRadius(radius){this.radius = radius;}
  setRadius(){console.log(this.radius);}
  getColor(color){this.color = String(color);}
  setColor(){console.log(this.color);}
  toString(){console.log(`Circle[ ${this.radius}, ${this.color}]`);}
  getArea(){console.log((22/7)*this.radius**2);}
  getCircumference(){console.log(2*(22/7)*this.radius);}
}

let cir = new Circle;
cir.getRadius(21);
cir.getColor("Blue");
cir.setRadius();
cir.setColor();
cir.toString();
cir.getArea();
cir.getCircumference();

// Output =>
// 21
// Blue
// Circle[ 21, Blue]
// 1386
// 132

// Question -
// Write a “person” class to hold all the details.

// Answer/Code -
//super/parent class
class person{
    static companyName = "Microsoft";
    constructor(name,age,address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getData() {
        console.log(`
        Name : ${this.name}
        Age : ${this.age}
        Address : ${this.address}`);
    }
    static getCompanyName() {
        console.log(person.companyName);
    }
}
//child class
class employee extends person{
    constructor(name,age,address,designation,salary) {
        super(name,age,address)
        this.designation = designation;
        this.salary = salary;
    }
    getData() {
        console.log(`
        Name : ${this.name}
        Age : ${this.age}
        Address : ${this.address}
        Designation : ${this.designation}
        Salary : ${this.salary}`);
    }
}

let person1 = new person( "Tony", 22, "345 main street" );
let employee1 = new employee( "Stephen", 35, "123 main street", "Senior Software Engineer", "$60000" );
person1.getData();
employee1.getData();
person.getCompanyName();

//Output =>
//         Name : Tony
//         Age : 22
//         Address : 345 main street

//         Name : Stephen
//         Age : 35
//         Address : 123 main street
//         Designation : Senior Software Engineer
//         Salary : $60000
// Microsoft

// Question -
// Write a class to calculate uber price.

// Answer/Code -

class Uber{
 getvalue(start,stop,distance){
     this.start= start;
     this.stop= stop;
     this.distance=distance;
 }
 price(){
     let bookingCharge=60,fare,perkm=12;
       fare=bookingCharge+this.distance*perkm;
       console.log(`
       Pickup point:${this.start}
       Destination:${this.stop}
       Distance:${this.distance}
       Fare:${fare}`);
 }
}
 let ride=new Uber();
  ride.getvalue("Borivili","Matunga",22);
  ride.price();
 let ride2=new Uber();
  ride2.getvalue("Chembur","Malad",21);
  ride2.price();

//   Output =>

//   Pickup point:Borivili
//   Destination:Matunga
//   Distance:22
//   Fare:324

//   Pickup point:Chembur
//   Destination:Malad
//   Distance:21
//   Fare:312