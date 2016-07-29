//incomplete
var fractionToDecimal = function(numerator, denominator) {
    var result = (numerator/denominator).toString().split('.'), repeat = "", nonRepeat="";
    if (result.length == 1) return 0;

    var map = {};
    for (var i = 0; i < result[1].length; i++) {
        var count = map[result[1][i]];
        map[result[1][i]] = count ? count += 1 : 1;
    }
    for (var k in map) {
        if (map[k] > 4) {
            repeat += k;
        }
    }

    if (repeat !== "") {
        for (var j = 0; j < result[1].length; j++) {
            if (result[1][j] === repeat) {
                nonRepeat = result[1].slice(0,j);
                break;
            }
        }
    }
    if (repeat !== "") {
        return result[0] + '.' + nonRepeat + '(' + repeat + ')';
    } else {
        return result.join('.');
    }
};

console.log(fractionToDecimal(2,3));
console.log(fractionToDecimal(1,5));
console.log(fractionToDecimal(1,6));
console.log(fractionToDecimal(1,99));
