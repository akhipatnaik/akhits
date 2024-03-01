let n:number=18;
let s:string="akhila";
let bool:boolean=true;
let na:number[]=[1,2,4];
let tuple:[string,number]=["kavya",28];
console.log(n); //output=18
console.log(s); //output=akhila
console.log(bool); //output=true
console.log(na);   //output=[1,2,4]
console.log(tuple); //output=['kavya',28]
enum daysofweek{ //enum declaration for daysofweeks
    Monday,
    Tuesday,
    Wednesday,
    thursday,
    friday,
    saturday,

}
console.log(daysofweek); 
function add(a:number,b:number) {
    return a+b;   
}
console.log(add(2,4)); //output=6
function capitalize(u:string):string{
    return u.charAt(0).toUpperCase()+u.slice(1);
}
console.log(capitalize("hi this is me")); //output= Hi this is me
//let u="akhila";
// let cap=capitalize(u);
// console.log(cap);
interface person{ //declaring interface
    name:string;
    age:number;
    email:string;
}
//declaring user
let user:person= {
    name: "akhila",
    age: 22,
    email: "akhila@gmail.com"
};
console.log(user); //output= {name: 'akhila',age: 22,email: 'akhila@gmail.com}
class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo(): void {
        console.log(`Car Information:
            Make: ${this.make}
            Model: ${this.model}
            Year: ${this.year}`);
    }
}

// Example 
const myCar = new Car("germany", "BMW", 1928);
console.log(myCar.displayInfo());   //output= Car Information : Make: germany  Model: BMW  Year: 1928
function reverseArray<T>(array:T[]) {
    return array.reverse();
    
}
console.log(reverseArray(["akhila","kavya"])); //output=['kavya','akhila']
