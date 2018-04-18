// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(n, ar) {
    var a = ar.sort((a, b) => b - a);
    var count = 1;
    for (var i = 0; i < n; i++) {
        if (a[i] === a[i+1]) { count++; }
        if (a[i] > a[i+1]) { break; }
    }
    return count;
}
