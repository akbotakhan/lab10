
let lab1 = [5, 5, 5, 5, 10, 10];
let lab2 = [5, 5, 5, 5, 5, 5, 10];
let lab3 = [5, 10, 10, 15];
let lab4_5 = [10, 5, 3, 5, 5, 5, 10, 10, 10, 10, 2];
let lab6 = [5, 5, 10, 0, 5, 10];
let lab8 = [5, 10, 10, 4, 5];
let quiz = 32;


function getSum(A) { 

  let final_sum = 0;
  for (i = 0; i < A.length; i++) {
    final_sum += A[i];
  }
  
  return final_sum;}


function main (lab1, lab2, lab3, lab4_5, lab6, lab8) {
  sum1 = getSum(lab1);
  sum2 = getSum(lab2);
  sum3 = getSum(lab3);
  sum4_5 = getSum(lab4_5);
  sum6 = getSum(lab6);
  sum8 = getSum(lab8);

  total = quiz + (sum1+sum2+sum3+sum4_5+sum6+sum8) * 60/280;
  return total;
}

let x = main(lab1, lab2, lab3, lab4_5, lab6, lab8);

const results = {
  lab1: sum1, // array of scores for lab1
  lab2: sum2, // array of scores for lab2
  lab3: sum3, // array of scores for lab3
  lab4_5: sum4_5, // array of scores for lab4 and 5
  lab6: sum6, // array of scores for lab6
  lab8: sum8 , // score of quiz1
  quiz: quiz, // array of sums of each lab
  scores_of_labs: [lab1, lab2, lab3, lab4_5, lab6, lab8],
  total_of_labs: sum1+sum2+sum3+sum4_5+sum6+sum8,
  total: total,
  };

  console.log(results);