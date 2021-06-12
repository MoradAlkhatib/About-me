"use strict";
var score=0;
let usern=prompt("Please Enter You'r Name");
alert('Hello  '+usern+'  You are Welcom');
alert(usern+' We Have A Seven Question For You ......');
 

function yesOrnoQuestion(question,correctAns,uncorrescAns) {
    let yourAnswer;
    do {
      alert(' Please Answer This Question With Yes , No , Y , N');
      yourAnswer=prompt(question).toLowerCase();
    } while (yourAnswer!=='yes' && yourAnswer!=='y' && yourAnswer!=='no' && yourAnswer!=='n');
    if (yourAnswer==='yes' || yourAnswer==='y') {
      alert(correctAns);
      score++;
    }else  {
      alert(uncorrescAns);
    }
    
  }



function guessAge(){
   
    let g;
    
    var guess;
   
    for(var i =0;i<4;i++)
    {
        g=prompt("whats My old ? Only Number Is Allowed");
    
            guess =parseInt(g);
       if(guess===24)
       {alert("Thats Correct Ansewr ");
       score++;
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
    


}



function guessTopTen(){
    let c =prompt('Try To Know One Of I Loved Car').toLowerCase();
    var cars = ["saab", "volvo", "bmw"];
    for(var s=0;s<5;s++){
    
     if(c==cars[0]||c==cars[1]||c==cars[2])
     {
         alert('You Have A correct Answer');
         score++;
         break;
     }
     else{
        c=prompt('Try To Know One Of I Loved Car').toLowerCase(); 
     }
    
    }
    
    if(c!=cars[0]&&c!=cars[1]&&c!=cars[2]){
        alert("unfortunately You Cant Have A Correct Answer..But  My Cars Is : "+cars);
    }

}

yesOrnoQuestion('Is The Programmer For This Page Love Work','You Have A Correct Answer','UnCorrect Answer');
yesOrnoQuestion('Is The Programmer Work As A Electric Assistant','You Have A Correct Answer','UnCorrect Answer');
yesOrnoQuestion('Is A Maui, Hawaii A One Of Top Ten To Visiting','You Have A Correct Answer','UnCorrect Answer');
yesOrnoQuestion('Is The Programmer Have A Degree Of Comuter Information System','You Have A Correct Answer','UnCorrect Answer');
yesOrnoQuestion('Is The Programmer Talk English Language','You Have A Correct Answer','UnCorrect Answer');
guessAge();
guessTopTen();


alert("You'r Scour Is "+score+"/7");
alert('Good Bye '+usern);



