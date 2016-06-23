function solution(S) {
   S = S.split(" ");
   var stack = [], err = false, result;
   S.forEach(function (val) {
    switch (val) {
        case "POP":
            if (stack.length === 0) {
                err = true;
            } else {
                stack.pop();
            }
            break;
        case "DUP":
            if (stack.length === 0) {
                err = true;
            } else {
                stack.push(stack[stack.length - 1]);
            }
            break;
        case "+":
            if (stack.length < 2) {
              err = true;
            } else {
                var sum = stack[stack.length-1] + stack[stack.length-2];
                stack.pop();
                stack.pop();
                stack.push(sum);
            }
            break;
        case "-":
            if (stack.length < 2) {
                err = true;
            } else {
                var diff = stack[stack.length-1] - stack[stack.length-2];
                if (diff < 0) {
                  err = true;
                }
                stack.pop();
                stack.pop();
                stack.push(diff);
            }
            break;
        default:
            if (!parseInt(val)) {
              err = true;
            }
            stack.push(parseInt(val));
    }
  });
  result = err ? -1 :stack[stack.length-1];
   return result;
}

console.log(solution("13 DUP 4 POP 5 DUP + DUP + -"));
console.log(solution("5 6 + -"));
console.log(solution("3 DUP 5 - -"));
console.log(solution("d"));
