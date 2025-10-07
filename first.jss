/**console.log("College Admissions portal ");
console.log("I love JavaScript!!!");
//conditional statement
let a=19;
if(a%2===0)
{
    console.log("even");
}
else
{
    console.log("odd");

} 
//creating object
const profile={
    name:"madhav",
    gender:"male",
    category:"general",
};
console.log(profile);

//alert message display
alert("hello user!");

//prompt message
let num=prompt("Enter a number");
if(num%5===0)
{
   console.log("multiple of 5");
}
else{
    console.log("not multiple of 5");
}

let s=prompt("Enter a score(0-100):")
let g;
if(s>=90 && g<=100)
{
    g="A";
}
else if(s>=70 &&s<=89)
{
    g="B";
}
else if(s>=60 &&s<=69)
{
    g="C";
}
else if(s>=50 && s<=59)
{
    g="D";
}
else if(s>=0 && s<=49)
{
    g="F";
}
console.log("Grade:",g);


let name=prompt("Enter your full name(without spaces):");
len=name.length;
console.log("@"+name+len);



let marks=[87,88,69,92,99] ; //creating array
let sum=0;
let avg;
for(let mark of marks)
{
    console.log(mark);
    sum=sum+mark;
}
avg=sum/marks.length;
console.log("Sum of marks:",sum);
console.log("Average marks:",avg);


let cm=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
cm.shift();
console.log(cm);
cm.splice(2,1,"Ola");
console.log(cm);
cm.push("Amazon");
console.log(cm);
**/

function vowels(str)
{
    let k=0;
    for(s of str)
    {
        if(s=="a"||s=="e"||s=="i"||s=="o"||s=="u")
            k++;

    }
    return k;
}
a=vowels(prompt("Enter string:"));
console.log("Number of vowels in a string:",a);
