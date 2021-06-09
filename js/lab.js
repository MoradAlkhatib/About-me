
function myQues(question, correctAns, uncorrectAns) {
  let q;
  do {
    q = prompt(question);
  }
  while (q !== 'yes' && q !== 'y' && q !== 'no' && q !== 'n');

  if (q === 'yes' || q === 'y') {
    alert(correctAns);
  }
  else {
    alert(uncorrectAns);
  }

}
myQues('Is The Programmer For This Page Love Work ', 'yes', 'no');
