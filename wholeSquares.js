/*
A whole square P is square of integer Q, P=Q^2
given a and, return number of whole squares in a..b.
i.e. if a=4 b=17, should return 3: 4 = 2^2, 9 = 3^2, 16=4^2
assume a<=b
*/

function solution(A, B) {
  var i,
  count = 0;
  if (A < 1) {
    A = 1;
  }
  for (i = A; i <= B; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      count +=1;
    }
  }
  return count;
}

console.log(solution(-4,17));
// console.log(solution(-4,0));


function solution(A, B) {
  var i,
  j = 1,
  square,
  count = 0;
  h = {};

  if (A < 1) {
    A = 1;
  }

  for (i = A; i <= B; i++) {
    h[i] = i;
  }

  while (true) {
    square = Math.pow(j,2);

    if (square > B) {
      return count;
    }

    if (Math.pow(j,2) in h) {
      count += 1;
    }

    j += 1;
  }
}

console.log(solution(-4,17443));
