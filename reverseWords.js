var reverseWords = function(str) {

    str = str.split(' ').reverse();
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].trim();
        if (str[i].length < 1) {
            str.splice(i,1);
            i -= 1;
        }
    }
    return str.join(' ');
};
console.log(reverseWords("  "));
