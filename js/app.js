"use strict";
var scour=0;
let usern=prompt("Please Enter You'r Name");
alert('Hello  '+usern+'  You are Welcom');
alert(usern+' We Have A Seven Question For U About Me Lest Start With These Question');

let userName=prompt("What The Name Of Programmer This Page ..Answer Murad");

var user=userName.toLowerCase();
if(user=="murad"){
    alert("You Have A correct");
    scour++;
}
else{
    alert("unfortunately You Have Uncorrect Answer");
}

let work=prompt("Is The Programmer For This Page Love Work ..Answer Yes Or No or y or n");

var works=work.toLowerCase();
if(works=="yes"||works=="y"){
    alert("You Have A correct Answer");
    scour++;
}
else if(works=="no"||works=="n"){
    alert("unfortunately You Have Uncorrect Answer");
}
else {
    alert("Please Answer Yes , No , y , n");
}
// end work
let wor=prompt("Is The Programmer Work As A Electric Assistant ..Answer Yes Or No or y or n");

var wors=wor.toLowerCase();
if(wors=="yes"||wors=="y"){
    alert("You Have A correct Answer");
    scour++;
}
else if(wors=="no"||wors=="n"){
    alert("unfortunately You Have Uncorrect Answer");
}
else {
    alert("Please Answer Yes , No , y , n");
}
// 
let worker=prompt("Is The Programmer  Work As A selling manager ..Answer Yes Or No or y or n");

var workers=worker.toLowerCase();
if(workers=="n"||workers=="no"){
    alert("You Have A correct Answer");
    scour++;
}
else if(workers=="yes"||workers=="y"){
    alert("unfortunately You Have Uncorrect Answer");
}
else {
    alert("Please Answer Yes , No , y , n");
}
//
let study=prompt("Is The Programmer Have A Degree Of Comuter Information System ..Answer Yes Or No or y or n");

var studys=study.toLowerCase();
if(studys=="yes"||studys=="y"){
    alert("You Have A correct Answer");
    scour++;
}
else if(studys=="no"||studys=="n"){
    alert("unfortunately You Have Uncorrect Answer");
}
else {
    alert("Please Answer Yes , No , y , n");
}
//
let g=prompt("whats My old ? Only Number Is Allowed");
var guess=parseInt(g);

for(var i =0;i<3;i++)
{
   if(guess===24)
   {alert("Thats Correct Ansewr ");
   scour++;
   break;
}
else if(guess>24){
    alert("thats high Hot..! ");
    guess=prompt("whats My old ?")
}
else if(guess<24)
{
    alert("Thats Low Cold..!");
    guess=prompt("whats My old ?");
}

}
if(guess!=24)
alert("Tha Correct Answer Is 24");


let c =prompt('Try To Know One Of I Loved Car').toLowerCase();
var cars = ["saab", "volvo", "bmw"];
for(var s=0;s<5;s++){

 if(c==cars[0]||c==cars[1]||c==cars[2])
 {
     alert('You Have A correct Answer');
     scour++;
     break;
 }
 else{
    c=prompt('Try To Know One Of I Loved Car').toLowerCase(); 
 }

}

if(c!=cars[0]&&c!=cars[1]&&c!=cars[2]){
    alert("unfortunately You Cant Have A Correct Answer..But  My Cars Is : "+cars);
}

alert("You'r Scour Is "+scour+"/7");


alert('Good Bye '+usern);