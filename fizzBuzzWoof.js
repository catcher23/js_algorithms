
function solution(N) {
    for (var i = 1; i <= N; i++) {
        if (i % 105 === 0) {
            process.stdout.write("FizzBuzzWoof\n");
        } else if (i % 35 === 0) {
            process.stdout.write("BuzzWoof\n");
        } else if (i % 21 === 0) {
            process.stdout.write("FizzWoof\n");
        } else if (i % 15 === 0) {
            process.stdout.write("FizzBuzz\n");
        } else if (i % 7 === 0) {
            process.stdout.write("Woof\n");
        } else if (i % 5 === 0) {
            process.stdout.write("Buzz\n");
        } else if (i % 3 === 0) {
            process.stdout.write("Fizz\n");
        } else {
            process.stdout.write(i+"\n");
        }
    }
}

console.log(solution(35));
