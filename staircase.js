// https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
    var step = [];
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= n-i; j++) {
            step.push(' ');
        }
        for (var k = 1; k <= i; k++) {
            step.push('#');
        }
        var ans = step.join('');
        console.log(ans);
        step.length = 0;
    }
}
