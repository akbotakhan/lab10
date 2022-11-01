
let lab1 = [5, 5, 5, 5, 10, 10];
let lab2 = [5, 5, 5, 5, 5, 5, 10];
let lab3 = [5, 10, 10, 15];
let lab4_5 = [10, 5, 3, 5, 5, 5, 10, 10, 10, 10, 2];
let lab6 = [5, 5, 10, 0, 5, 10];
let lab8 = [5, 10, 10, 4, 5];
let lab9_q = [32];

function main(lab1, lab2, lab3, lab4_5, lab6, lab8, lab9_q) { 

let sum1 = 0;
for (i = 0; i < lab1.length; i++) {
  sum1 += lab1[i];
}

let sum2 = 0;
for (i = 0; i < lab2.length; i++) {
  sum2 += lab2[i];
}

let sum3 = 0;
for (i = 0; i < lab3.length; i++) {
  sum3 += lab3[i];
}

let sum4_5 = 0;
for (i = 0; i < lab4_5.length; i++) {
  sum4_5 += lab4_5[i];
}

let sum6 = 0;
for (i = 0; i < lab6.length; i++) {
  sum6 += lab6[i];
}

let sum8 = 0;
for (i = 0; i < lab8.length; i++) {
  sum8 += lab8[i];
}

let sum9_q = 0;
for (i = 0; i < lab9_q.length; i++) {
  sum9_q += lab9_q[i];
}

return obj; }
console.log(lab1, lab2, lab3, lab4_5, lab6, lab8, lab9_q);


function getSum(A) { 

  final_sum = 0;
  for (i = 0; i < A.length; i++) {
    final_sum += A[i];
  }
  
  return final_sum; }

  sum1 = getSum(lab1);
  sum2 = getSum(lab2);
  sum3 = getSum(lab3);
  sum4_5 = getSum(lab4_5);
  sum6 = getSum(lab6);
  sum8 = getSum(lab8);
  sum9_q = getSum(lab9_q)

  console.log(sum1);
  console.log(sum2);
  console.log(sum3);
  console.log(sum4_5);
  console.log(sum6);
  console.log(sum8);
  console.log(sum9_q);
