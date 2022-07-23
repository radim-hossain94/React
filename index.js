//Essential javascript


// function sum(num1, num2){
//     return num1 + num2;
// }

// const c = sum(2,2);

// console.log(c)


//function expresion
// const sum = function (num1, num2){
//     return num1 + num2;
// }

// console.log(sum(1,2));


const sum = (num1,num2) => num1 + num2; //arrow function

console.log(sum(1,2));

const multi = num1 => num1 * 20;

console.log(multi(12));

//expression are whatever can be written left hand side of variable.
//statement are command  
//expression are value
const firstName = 'Radim';
const lastName = 'Hossain';
const framework = 'React';
const fullname = `My name is ${ firstName } ${lastName} and I love "${framework}". `; // javascript expression can be written inside {}.

console.log(fullname)


//conditional statement
//if-else statement
const press = 19;
const result = (press >= 18) ? 'You are adult' : 'You are not adult yet';

console.log(result);

//logical && operator

const r = press >= 15 && press == 9 && 'You are adult enogh'

const n = press >= 20 || press < 2 || 'You are adult enogh'

console.log(r);

console.log(n);



//array

let array = [1, 2, 3, 4];
let arr = [];
//imperative coding
function double() {
    for(let i = 0; i < array.length; i++){
        //array[i] = array[i] * 2;
        arr.push(array[i]*2);
        //console.log(array[i]);
    }
    return arr;
}

console.log(double());


//declarative coding
const arrayone = [];

function doubled(){
    for(let x of array){
        arrayone.push(x*2);
    }
    return arrayone;
}

console.log(doubled());

//map
const a = [1,2,3,4];
const val = a.map( (x,arr_index) => {
    //console.log(arr_index);
    return x*2;

})

console.log(val);


//find
const test_arr = [4,3,2,1]

const test_result = test_arr.find((x,index)=>{
    //console.log(index);
    return (x ==3,index);
})

console.log(test_result)

const test_result1 = test_arr.filter((x,index)=>{
    //console.log(index);
    return x > 2;
});

console.log(test_result1);

//normal object
const obj = {
    name : "Radim",
    age : 27
}

console.log(obj.name);

//destructuring
const person = {
    name1 : "Radim",
    age1 : 27
}

const {name1} = person;

console.log(name1);


//rest
const Person = {
    person_name : "Radim",
    person_lastName: "hossain",
    person_age : 27
}
const {person_name, ...restValue} = Person

//console.log(person_name);
console.log(restValue);

//accessing values in rest by destucturing
// const {person_age} = restValue;

// console.log(person_age)

//spread operator
const Person_test = {
    ...person,
    profession : 'Student'
}

console.log(Person_test);
console.log(Person_test.name1);


const testing_arr = [10,20,30,40,50];
//rest
const [num1, num2, ...rest_of_array] = testing_arr;

console.log(rest_of_array);
//spread
const test_spread = [...testing_arr, 60,70];

console.log(test_spread);




const v = ({person_name,person_lastName,...restValuePerson}) => {
    const {person_age} = restValuePerson;
    console.log(person_age);
    return person_name, restValuePerson;
}

console.log(v(Person));


const test_resst = ({person_lastName, ...rest_of_person}) => {
    const object_test = {person_lastName,...rest_of_person};
    return object_test
}

console.log(test_resst(Person))



//data dealing 3 way => callback, promise, async await
//promise
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(err => console.log(err))

//async await
async function run(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

run();


//class

class Student {
    // name;
    // roll;

    constructor (name, roll){
        console.log(name,roll);
        this.name  = name;
        this.roll = roll;
    }

    shwStudentInfo(){
        return this.name + '-' + this.roll;
    }
}

// const s = new Student('test', 10);

// console.log(s.name);

// console.log(s.roll);

// console.log(s.shwStudentInfo())

class Human extends Student{

    constructor(Name,Age,Course){
        super(Name,Age);
        this.course = Course;
    }

    showHuman(){
        const info = 'Hello there';
        return info;
    }

}

const h  = new Human('Radim', 10, 'React');

console.log(h);
console.log(h.shwStudentInfo())
console.log(h.showHuman())