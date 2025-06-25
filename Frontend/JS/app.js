/*console.log("Traafic lights System");
let light = "green";
if (light == "red") {
    console.log(`light is red , Please Stop!`);
}
if (light == "yellow") {
    console.log(`light is yellow, Please Wait`);
}
if (light == "green") {
    console.log(`light is green , nickelodeon`);
}*/



/*console.log(`voting`);
let age = 4;
if (age >= 18) {
    console.log(`you can vote`);
}
else {
    console.log(`you are minor can't vote`);
}*/



/* console.log(`PopcornPrices`);
let size = "dsd";
if (size === "XL") {
    console.log(`Price of popcorn is 250`);
}
else if (size === "L") {
    console.log(`Price of popcorn is 200`);
}
else if (size === "M") {
    console.log(`Price of popcorn is 100`);
}
else if (size === "S") {
    console.log(`Price of popcorn is 50`)
}
else {
    console.log(`no popcorn of this size available`);
}*/



/*console.log(`A Good String Finder`);
let letter1='a';
let length=4;
if (letter1==='a' && length>3) {
    console.log(`the string is good`);
}
else {
    console.log(`chutiya string`)
} */




/*
console.log(`A Good String Finder`);
let string = "ava";
if (string[0] === 'a' && string.length > 3) {
    console.log(`the string is good`);
}
else {
    console.log(`chutiya string`)
} 




console.log(`Assignment Ques1`);
let num = 80;
if (num % 10 == 0) {
console.log(`good`);
}
else {
    console.log(`bad`);
}



console.log(`Assignment Ques2`);
let name=prompt("user's name");
let age=prompt(`user's age`);
alert(`${name} is ${age} years old`);



console.log(`Golden String`);
let str = "diyashi";
if (str[0] === 'A' || str[0] === 'a') {
    console.log(`the string is golden`);
}
else { console.log(`bentex string`) };



console.log(`meth`);
let num1=72;
let num2=90;
let num3=74;
if (num1>num2 && num1>num3) {
    console.log(`${num1} is largest`);
}
else if (num2>num1 && num2>num3) {
    console.log(`${num2} is largest`);
}
else if (num3>num1 && num3>num2) {
    console.log(`${num3} is largest`);
}
else {
    console.log(`${num1},${num2} and ${num3} are incomparable`);
}*/



/*console.log(`PracticeQues1`);
let msg="help!";
newmsg=msg.trim().toUpperCase();
console.log(newmsg);*/



/*console.log(`PracticeQues2`);
let name = "ApnaCollege";
let newname= name.replace("Apna", "Our");
console.log(newname);*/



/*console.log(`concat method`);
let football = ['messi', 'ronaldo', 'neymar'];
let mmaufc = ['mcgregor', 'adeasanya', 'khabib'];
let skills = football.concat(mmaufc);
console.log(skills); */



/*let fighters = ['mike','conor','israel','jon','ali'];
let sliced=fighters.slice(2,4);
console.log(sliced); */



/*console.log(`practiceq1`);
let month = ['january', 'july', 'march', 'august'];
let months = month.splice(0,2,'july','june');
console.log(month); */



/*console.log(`practiceq2`);
let coding= ['c','c++','html','javascript','python','java','c#','sql'];
let code = coding.reverse();
console.log(code); */



/*console.log(`PracticeQues`);
let tictac = [['X',' ','O'],[' ','X','O'],['O',' ','X']];
console.log(tictac);
tictac[0][1]='O'; */



/* console.log(`Ques1`);
let array=[7,9,0,-2];
let n=3;
let printarr=array.slice(0,n);
console.log(printarr); */



/*console.log(`Ques2`);
let array = [7, 9, 0, -2, 5, 4];
let n = -3;
let printarr = array.slice(n);
console.log(printarr); */



/*console.log(`ques3`);
let str = "";
if (str.length=='0') {
    console.log(`given string is blank`);
}
else {
    console.log(`given string is not blank`);
} */



/*console.log(`Ques4`);
let name = 'CrIStiANo';
let idx = 1;
if (name[idx] == name[idx].toLowerCase) {
    console.log(`given character is at lower case`);
}
else {
    console.log(`given character is not at lower case`);
}  */



/* console.log(`Ques6`);
let array = [0, 1, 2, 3, 4, 5];
let elem = 8;
if (array.indexOf(elem) == -1) {
    console.log(`Element does not exist`);
}
else {
    console.log(`Element exist`);
} */



/*console.log(`Loops`);
let i;
for (i=1;i<6;i++) {
    console.log(i);
}
*/



/* console.log(`Printing all odd numbers`);
let num;
for (num = 1; num <= 15; num= num + 2) {
    console.log(num);
}



console.log(`Printing all even numbers`);
let numb;
for (numb = 2; numb <= 10; numb = numb + 2) {
    console.log(numb);
} */



/* let n = prompt(`Number you want multiplication of`);
n=parseInt(n);
console.log(`Printing Multiplication Table`);
for( let i=n;i<=n*10;i=i+n) {
    console.log(i);
}  */



/* console.log(`While Loop`);
let i = 20;
while (i >= 0) {
    console.log(i);
    i--;
} */



/*console.log(`Favourite Movie`);
let guess = prompt(`What's Your favorite movie`);
while ((guess!=="shawshank") && (guess!=="quit")) {
    guess = prompt(`Wrong guess, Please try again`)
}
if (guess=="shawshank") {
    console.log(`Allahmudillah`);
}
else {
    console.log(`Why tap go sleep`);
} */




/*console.log(`Loops with array`);
let fighters = ['mike','conor','israel','jon','ali'];
for (let i=0;i<fighters.length;i++) {
    console.log(fighters[i]);
} */




/*console.log(`Nested Array`);
let heroes = [["ironman", "spidey", "hulk"], ["superman", "batman", "aquaman"]];
for (let i = 0; i < heroes.length; i++) {
    console.log(i, heroes[i]);
    for (let j = 0; j < heroes[i].length; j++) {
        console.log(j, heroes[i][j]);
    }
}



console.log(`Nested Array`);
let ballers = [["cristiano", "benzema", 'bale'], ["messi", "neymar", "suarez"]];
for (let i = 0; i < ballers.length; i++) {
    console.log(`Team ${i + 1}`, ballers[i]);
    for (let j = 0; j < ballers[i].length; j++) {
        console.log(`Strike No.${j + 1}.`, ballers[i][j]);
    }
} */



/*console.log(`For Of Loop`);
let fruits=['mango','banana','orange','litchi','apple'];
for (fruit of fruits) {
    console.log(fruit);
}



console.log(`way 2`);
for (phal of fruits=['mango','banana','orange','litchi','apple']) {
    console.log(phal);
} */



/*console.log(`Nested for of Loop`);
let  heroes = [["ironman", "spidey", "hulk"], ["superman", "batman", "aquaman"]];
for (hero of heroes) {
    for (supe of hero) {
        console.log(supe);
    }
} */



/*console.log(`Practice Ques 1 `);
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 5;

for(let i=0;i<arr.length;i++) {
    if(arr[i]==num) {
        arr.splice(i,1);
    }
}
console.log(arr); */


/*console.log(`Ques2`);
let num = "287152";
let count = (num.length) + 1;
console.log(`The count is:${count}`); */



/*console.log(`Ques3`);
let num= "287152";
for(i=0;i<num.length;i++) {
    
}*/


/*console.log(`Ques3`);
let num = 7;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(`factorial of ${num} is ${factorial}`); */


/*console.log(`Ques5`);
let arr = [2, 3, 4, 5, 67, 7, 9, 789,90];
let largest = 0;
for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
        largest = arr[i];
    }

}
console.log(largest);*/


/*console.log(`Object Literals`);
const khabib = {
    name: "khabib",
    age: 30,
    fights: 29,
    place: "russia"
};*/


/*console.log(`twitter post`);
let post = {
    username: "kaleo",
    content: "music",
    likes: "700k",
    repost: "7k",
    tags: ["@arcticmonkeys", "@neighbourhood"]
}; */


/*console.log(`Array of Objects`);
const ClassInfo = [
    {
        name: "Rajveer",
        age: 19
    },
    {
        name: "dube",
        age: 19
    },
    {
        name: "pratyush",
        age: 19
    }
] */


/*console.log(`Guessing Game`);
let max = prompt(`Enter the maximum number`);
const random = Math.floor(Math.random() * max) + 1;
while (true) {
    let guess = prompt(`guess the number`);
     if (guess == random) {
        console.log(`${guess}:is the right guess`);
        break;
    }
    else  {
        console.log(`Wrong guess`);        
    }
    if (guess === "quit") {
        console.log(`game over`);
        break;
    }
}*/

/*console.log(`Ques2`);
let car={
    name: "Mercedes",
    model: "G-Wagon",
    color: "Royal Black"
}
console.log(car.name); */


/*console.log(`practice ques`);
function poem() {
    console.log(` I am the most brutal and vicious fighter and most ruthless champion that's ever been.`)
} */


/*console.log(`Practice Ques`);
function dice() {
    console.log(Math.floor(Math.random()*6)+1);
}
dice();*/



/*console.log(`Functions`);
function info(name,position) {
    console.log(`${name}'s position is ${position}`
);
}
info("Paul Pogba", "Midfield");*/


/*console.log(`Average`);
function average(a,b,c) {
    let avg=(a+b+c)/3;
    console.log(avg);
}
average(1,2,3);
average(1,1,1);
average(344,545,533);*/



/*console.log(`Multiplication Table using functions`);
let num=prompt(`Enter the number you want multiplication table of:`);
function table(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num * i);
    }
}
table(num); */


/*console.log(`Function for sum from 1 to n`);
function getsum(n) {
    let sum=0;
    for(i=1;i<=n;i++) {
        sum =sum+i;
    }
    return sum;
}*/


/*let arr=["messi","ronaldo","neymar","chetri","ramos"];
function concat(arr) {
    let result;
    for(let i=0;i<arr.length;i++) {
         result += arr[i];
    }
    return result;
}   */


/*function multipleGreet(func,count) {
    for (let i=1;i<=count;i++) {
        func();
    }
}
let greet = function() {
    console.log("Hello");
}
multipleGreet(greet,4); */


/*console.log(`Ques1`);
let arr = [8, 4, 5, 2, 3, 6, 7, 9, 0];
function getLargenum(arr,n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > n) {
            console.log(arr[i]);
        }
    }
}*/




/*console.log(`Ques3`);
let country = ['india', 'australia', 'Thailand'];
function longestName(country) {
    let ans = 0;
    for (let i = 0; i < country.length; i++) {
        let ansleng = country(ans).length;
        let currleng = country[i].length;
        if (currleng > ansleng) {
            ans = i;
        }
    }
    return country[ans];
}*/



/*console.log(`Ques 4`);
let str = "Cristiano Ronaldo";
function countVowels() {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            count++;
        }
    }
    return count;
} */



/*console.log(`Ques 5`);
function getRandom(start,end) {
   let number= Math.floor(Math.random()*end) + start;
   console.log(number);
}
getRandom(44,444);*/



/*console.log(`This Keyword`)
const student = {
    name: "Rajveer",
    age: 19,
    eng: 74,
    math: 98,
    sci: 86,
    getavg() {
        let avg = (this.eng + this.math + this.sci) / 3;
        console.log(avg);
    }
} */



/*console.log(`Arrow Functions`);
const square = (n) => {
    console.log(n * n);
}
square(4);
console.log(`implicit return`);
const multiplication = (a,b) => (a*b); */


/*console.log(`timeout function`);
console.log(`Muchas Gracias afficion`);
setTimeout(() => {
    console.log(`Siuuu`);
}, 3500);
console.log(`Esto para vosotros`);*/



/*console.log(`Set Interval function`);
console.log(`Muchas Gracias afficion`);
let id = setInterval(() => {
    console.log(`Siuuu`);
}, 3500);
console.log(`Esto para vosotros`); */



/*console.log(`this with Aroow functions`);
const student = {
    name: "rajveer",
    age: 19,
    prop: this,
    getName: function () {
        console.log(this);
        console.log(this.name);
    },
    getAge: () => {
        console.log(this);
        console.log(this.age);
    }
}*/

/*let n=4;
let getSqr= (n) => {
    console.log(n*n);
} */



/*console.log(`Ques`);
let id = setInterval(() => {
    console.log(`Hello World`);
}, 2000);
setTimeout(() => {
    clearInterval(id);
}, 10000); */


/*console.log(`Ques1`);
let arr = [6,5,4,7,8,9];
const arrayAverage = (arr) => {
    let avg = 0;
    for (elements of arr) {
        avg += elements;
    }
    return avg/arr.length;
}
console.log(arrayAverage(arr));*/



/*console.log(`Ques2`);
const isEven = (num) => {
    if (num%2==0) {
        console.log(`${num} is Even`);
    }
    else {
        console.log(`${num} is Odd`);
    }
}
console.log(isEven(89));*/

/*console.log(`forEach`);
let arr = [1, 2, 3, 4, 5];
arr.forEach(function print(el) { //or can declare function then put value in forEach.
    console.log(el);
}); */


/*console.log(`map function`);
let num = [2, 3, 4, 56,];
let doubleNum = num.map(function (el) {
    return el * el;
});*/


/*console.log(`filter `);
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenArr = arr.filter((el) => {
    return !(el % 2 == 0); //el % 2 != 0;
});
console.log(evenArr); */


/*console.log(`Reduce`);
let nums=[1,3,5,7];
let reduceNums = nums.reduce((res,el) => {
    return res*el;
}); // 1st result is 1 not 0
console.log(reduceNums);  */


/*console.log(`Maximum in array using reduce`);
let nums = [2, 3, 4, 5, 3, 4, 7, 2, 8, 1, 2];
let max = nums.reduce((max, el) => {
    if (max < el) {
        return el;
    }
    else {
        return max;
    }
})
console.log(max);*/


/*console.log(`Multiple of 10`);
let arr = [20, 30, 40, 10];
let multipleTen = arr.every((el)=> el%10==0);*/

/*console.log(`minimum using array`);
let arr = [7,44,789,5];
let min = arr.reduce((ans, el) => {
    if (ans<el) {
        return ans;
    }
    else {
        return el;
    }
})*/


/*console.log(`Spread`);
let arr=[4,35,34,334,435,345,345,354,23,23464,67];
console.log(Math.min(...arr));
let name="rajveer";
console.log(...name);
console.log(`spread using oject literals`);
let data = {
    email: "abcd@gmail.com",
    password : "ada"
};
let dataCopy = {...data, id: 123};
console.log(dataCopy);*/


/*console.log(`Rest`);
function sum(...args) {
    return args.reduce((ans, el) => {
        return ans + el;
    });
}
function max(...args) {
    return args.reduce((max, el) => {
        if (max > el) {
            return max;
        }
        else {
            return el;
        }
    })
} */


/*console.log(`Destructing`);
let names=["adesanya","periera","strickland","Jones","khabib","mcgregor","khamzat"];
let [warrior,chama,striker,...others]=names;*/

/*console.log(`Destructiing with objects`);
let student={
    username: "Rajveer",
    age: 19,
    password: "rdx123",
    semester: "2nd",
    city: "jabalpur"
}
let {username:name,password: secret , city: adress="bhopal",...others}=student;*/


/*console.log(`ques1`);
let arr=[1,2,3,4];
let square = arr.map((num)=> num*num);
console.log(square);
let sum = square.reduce((acc,cur)=> acc+cur,0);
let avg = sum/arr.length;
console.log(avg);*/

/*console.log(`ques2`);
let arr=[3,2,5,6,7-4];
console.log(arr.map((num)=>num+5));*/

/*console.log(`ques3`);
let names=["ashwin","diyashi","tisha"];
let newNames=names.map((name)=>name.toUpperCase());*/

/*console.log(`ques4`);
let doubleAndReturnArgs = (arr,...args) => {arr,args.map((el)=>el*2)};
console.log(doubleAndReturnArgs([1,2,5,6],7,8));*/

/*console.log(`ques5`);
const mergeObjects = (goat1, goat2) => ({
    ...goat1, ...goat2
});
mergeObjects({
    name: "khabib",
    location: "dagestan",
    age: 33,
    sport: "mma"
},
    {
        name: "mike tyson",
        location: "new jersey",
        age: 56,
        sport: "boxing"
    });*/


/*console.log(`Practice Ques`);

let newP=document.createElement('p');
newP.innerText="Hey I am Red!";
document.querySelector('body').append(newP);
newP.style.color="red";

let newH=document.createElement('h3');
newH.innerText="I'm a Blue H3!";
document.querySelector('body').append(newH);
newH.style.color="Blue";

let newDiv=document.createElement('div');
let newH1=document.createElement('h1');
let newP2=document.createElement('p');

newH1.innerText="Hey, I am Div!";
newP2.innerText="ME TOO!";

newDiv.appendChild(newH1);
newDiv.appendChild(newP2);

newDiv.classList.add("div");

document.querySelector('body').append(newDiv);*/

/*console.log(`ques1`);
let inputEl=document.createElement('input');
let btnEl=document.createElement('button');
btnEl.innerText="Click me";
document.querySelector('body').append(inputEl);
document.querySelector('body').append(btnEl);
inputEl.placeholder="Username";
btnEl.setAttribute('id','btn');

let h1El=document.createElement('h1');
h1El.innerText="DOM Practice";
document.querySelector('body').append(h1El);
h1El.classList.add("h1");

let pEl=document.createElement('p');
pEl.innerHTML="Apna College <b>Delta</b> Practice";
document.querySelector('body').append(pEl);*/

/*console.log(`DOM Events`);
let btn = document.querySelector('button');
console.dir(btn);

btn.onclick = popup;

function sayhello() {
    console.log(`Button was Clicked`);
} //or
function popup() {
    alert("The button was clicked");
}*/

/*console.log(`event listener`);
let btns = document.querySelectorAll('button');
for (btn of btns) {
    btn.addEventListener("click",popup);
    btn.addEventListener("click",sayhello);
}
function popup() {
alert("Button Was Clicked");
}
function sayhello() {
    console.log(`button was clicked`);
}*/

/*console.log(`Activity`);

html code
<h3>Generate a Random Color</h3>
    <br>
    <button>Generate color</button>
    <br/>
    <div class="div">This is Your new color</div>
let btn = document.querySelector('button');


btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div=document.querySelector("div");
    div.style.backgroundColor=randomColor;

    console.log(`Color Updated`);
})
function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}*/

/*console.log(`event listener for elements`);
let p = document.querySelector("p");
p.addEventListener("click", sayHover);
function sayHover() {
    console.log(`paragraph was hovered`);
}
let box=document.querySelector(".box");
box.addEventListener("mouseenter",function() {
    console.log(`cursor inside box`);
})*/


/*console.log(`this in event listener`);
let btn =document.querySelector("button");
btn.addEventListener("click",function() {
    console.log(this); //this call backs its original value of btn
})*/

/*console.log(`Keyboard Event`);
let btn = document.querySelector("input");

btn.addEventListener("click",function() {
    console.log(event);
})
btn.addEventListener("dblclick",function() {
    console.log(event);
})
btn.addEventListener("keydown",function() {
     console.log("code=",event.code);
     console.log("key=",event.key);
})
let input = document.querySelector("input");
input.addEventListener("keydown", function (event) {
    if (event.code == "KeyU") {
        console.log(`upwards or upar chak pavv`);
    }
    else if (event.code == "KeyD") {
        console.log(`Down or Rock Bottom`);
    }
    else if (event.code == "KeyR") {
        console.log(`Right or sahi`);
    }
    else if (event.code == "KeyL") {
        console.log(`Left`);
    }
    else {
        console.log(`No commands for entered key`);
    }
}
)*/

/*console.log(`Form events`);
let form=document.querySelector("form");
form.addEventListener("submit", function() {
    event.preventDefault(); //stops the deefault work
    alert("Form Submitted");
})*/

/*console.log(`Extracting form data`);
let form=document.querySelector("form");
form.addEventListener("submit",function() {

    event.preventDefault(); //stops the deefault work
    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
})
//OR 
let form=document.querySelector("form");
form.addEventListener("submit",function(event) {
    event.preventDefault();
    console.dir(form.elements);
    let user = this.elements[0];
    let pass = this.elements[1];

    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
}
)*/

/*console.log(`ques1`);
let button=document.querySelector("button");
button.addEventListener("mosuseover",function() {
    console.log(`Mouseout bhenchod`);
})*/

/*console.log(`ques2`);
let button = document.querySelector("button");
button.addEventListener("click", changeColor);
function changeColor() {
    button.style.backgroundColor="green";
    console.log(`Color Changed`)
}*/

/*console.log(`Ques 3`);
let name = document.querySelector("input");
let h2 = document.querySelector("h2");
name.addEventListener("keydown", printName);
function printName() {
    h2.innerText = name.value;
}*/

/*console.log(`event bubbling`);
let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");
div.addEventListener("click", function () {
    console.log(`div was clicked`)
})
ul.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log(`ul was clicked`)
})
for (li of lis) {
    li.addEventListener("click", function (event) {
        event.stopPropagation();
        console.log(`li was clicked`);
    })
}*/

/*console.log(`Todo app`);
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = "";

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
})

ul.addEventListener("click", function (event) {
    if (event.target.nodeName = "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove()
    }
})*/

/*console.log(`Call Stack`);
function one() {
    return 1;
}
function two() {
    return one() + one();
}
function three() {
    let ans = two() + one();
    console.log(ans);
}*/

/*let h1 = document.querySelector("h1");
function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        nextColorChange = color;
    }, delay);
}//callback hell
changeColor("orange", 1000, () => {
    changeColor("red", 1000, () => {
        changeColor("yellow", 1000, () => {
            changeColor("crimson", 1000);
        });
    })
});*/

/*console.log(`Callback Hell`);
function savetoDB(data, sucess, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 5) {
        sucess();
    }
    else {
        failure();
    }
    console.log(internetSpeed);
}

savetoDB(
    "Apna College",
    () => {
        console.log(`Sucess: Your Data Was Saved`);
        savetoDB(
            "hello world",
            () => {
                console.log(`Sucess2`);
                savetoDB(
                    "Rajveer",
                    () => {
                        console.log(`Sucess3`)
                    },
                    () => {
                        console.log(`Failure3`);
                    }
                )
            }
            ,
            () => {
                console.log(`Failure2`);
            }
        )
    },
    () => {
        console.log(`Weak Connection`);
    }
)*/

/*console.log(`Promises`);
function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 5) {
            resolve(`Sucess, data was saved`);
        }
        else {
            reject(`Failure, weak connection`);
        }
    })
}

console.log(`then and catch`);
saveToDb("ram")        //request is a promise
    .then((result) => {
        console.log(`data1 saved: `,result);
        return saveToDb("krishna")
    })
    .then((result) => {
        console.log(`data2 saved: `,result);
        return saveToDb("shiva"); 
    })
    .then((result) => {
        console.log(`data3 saved: `,result);
    })
    .catch((error) => {
        console.log(`reqeust was canelled: `, error);

    });*/

/*let h1 = document.querySelector("h1");
function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve(`Color Changed`);
        }, delay);
    })
}//callback hell
changeColor("red", 1000)
    .then(() => {
        changeColor("orange", 1000);
    })
    .then(() => {
        changeColor("green", 1000);
    })
    .then(() => {
        changeColor("blue");
    })*/

/*console.log(`async functions`);
async function greet() {
    return "hello";
    throw "problem in finding";
}
greet() 
.then((result)=> {
    console.log(`problem resolved: `,result);
})
.catch((error)=>{
    console.log(`weak connection: `,error);
})*/


/*console.log(`await keyword`);
function num() {
    return newNum((resolve, reject) => {
        setTimeout(() => {
            let nos = Math.floor(Math.random() * 10) + 1;
            console.log(nos);
            resolve();
        }, 1000);
    });
}
async function Demo() {
   await num();
   await num();
   await num();
   await num();
}*/

/*console.log(`API's`);
console.log(`JSON`);
let jsonRes = '{"fact":"Phoenician cargo ships are thought to have brought the first domesticated cats to Europe in about 900 BC.","length":105}'

let validRes=JSON.parse(jsonRes);
console.log(validRes.fact); //acessing json data through parse

let tyson = {
    name: "mike",
    stats: 29-1
}
let jsonChange = JSON.stringify(tyson);
console.log(jsonChange);*/

/*console.log(`Our First Request using fetch`);
let url = "https://catfact.ninja/fact";
fetch(url)
    .then((res) => {
        console.log(res);
       return res.json();
    })
    .then((data1)=>{
        console.log("data 1 = " ,data1.fact);
        return fetch(url);
    })
    .then((res)=> {
        return res.json();
    })
    .then((data2)=>{
        console.log("data 2 = ",data2.fact);
    })
    .catch ((err) => {
    console.log(err);
})*/

/*console.log(`using async and await`);
let url = "https://catfact.ninja/fact";
async function getFacts() {
try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
}
catch (err) {
    console.log(err);
}
}*/

/*console.log(`using axios`);
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let fact = await getFacts();
    let h4 = document.querySelector(".fact");
    h4.innerText=fact;
})
let url = "https://catfact.ninja/fact";
async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;

    }
    catch (err) {
        console.log("error ", err);
    }
}*/

/*console.log(`Dog images`);
let url ="https://dog.ceo/api/breeds/image/random"
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let image = await getImg();
    let img=document.querySelector(".img");
   img.setAttribute("src",image);
})
async function getImg() {
    try {
        let res = await axios.get(url);
        return res.data.message;

    }
    catch (err) {
        console.log("error ", err);
    }
}*/

/*const url = "https://icanhazdadjoke.com";

async function getJokes() {
    try{
        const config = { headers: { Accept: "application/json"}};
        let res=await axios.get(url);
        console.log(res);
    }
    catch(err) {
        console.log(err);
    }
}*/

/*console.log(`updating query string`);
let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);
    let colArr = await getCollege(country);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerHTML = '';
    for (col of colArr) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getCollege(country) {
    try {
        let res = await axios.get(url + country);
        console.log(res.data);
    } catch (err) {
        console.log(err)
        return [];
    }
}*/





