'use strict';

alert('Pleas Answer With Yes ,No , y ,n');
function yesOrnoQuestion(question,correctAns,uncorrescAns) {
  let yourAnswer;
  do {
    yourAnswer=prompt(question).toLowerCase();
  } while (yourAnswer!=='yes' && yourAnswer!=='y' && yourAnswer!=='no' && yourAnswer!=='n');
  if (yourAnswer==='yes' || yourAnswer==='y') {
    alert(correctAns);
    score++;
  }else {
    alert(uncorrescAns);
  }
}



ques('Is The Programmer For This Page Love Work', 'yes' , 'no');
ques('Is The Programmer Work As A Electric Assistant Is The Programmer Work As A Electric Assistant', 'yes' , 'no');
ques('Is The Programmer  Work As A selling manager' , 'yes' , 'no');
ques(' is The Name Of Programmer Of this Page Is Murad', 'yes' , 'no');
ques('Is The Programmer Have A Degree Of Comuter Information System' , 'yes' , 'no');


// function yesOrnoQuestion(question,correctAnswer,uncorrectAnswer){
//     let yourAnswer;
  
//   do {

//       yourAnswer =prompt(question).toLowerCase();

//   } while (yourAnswer!=='yes' && yourAnswer!=='y' && yourAnswer=='no' && yourAnswer!=='n');
  
//   if(yourAnswer=='yes' || yourAnswer=='y')
//   {
//       alert(correctAnswer);
//       score++;
//   }
//   else
//   {
//       alert(uncorrectAnswer);

//   }
// }

// yesOrnoQuestion('Is The Programmer For This Page Love Work','You Have A Correct Answer','UnCorrect Answer');
// yesOrnoQuestion('Is The Programmer Work As A Electric Assistant','You Have A Correct Answer','UnCorrect Answer');
// yesOrnoQuestion('Is A Maui, Hawaii A One Of Top Ten To Visiting','You Have A Correct Answer','UnCorrect Answer');
// yesOrnoQuestion('Is The Programmer Have A Degree Of Comuter Information System','You Have A Correct Answer','UnCorrect Answer');
// yesOrnoQuestion('Is The Programmer Talk English Language','You Have A Correct Answer','UnCorrect Answer');