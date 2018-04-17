// https://www.hackerrank.com/challenges/compare-the-triplets/problem

function solve(a0, a1, a2, b0, b1, b2) {
    var aliceArray = [a0, a1, a2];
    var bobArray = [b0, b1, b2];
    var aliceScore = 0;
    var bobScore = 0;
    aliceArray.map((ele, index) => {
        if (ele > bobArray[index]) { aliceScore ++};
        if (ele < bobArray[index]) { bobScore ++ };
    })
    return [aliceScore, bobScore];
}
