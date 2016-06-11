function solution(S) {
    S.replace(/'?'|'!'/g,'.');
    var str = S.split(".");
    var longest = 0;
    var words;
    str.forEach(function(sentence) {
        words = sentence.split(" ").filter(Boolean);
        if (words.length > longest) {
            longest = words.length;
        }
    });
    return longest;
}

console.log(solution('We test coders. Give us a try?'));

/*
given string s of n characters, return maximum # of words in sentence
sentences are divided by ! ? and .
*/
