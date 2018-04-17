//https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
    var plusses = 0;
    var zeroes = 0;
    var negatives = 0;
    arr.map((ele, index) => {
        (ele > 0) ? plusses ++ : (ele < 0) ? negatives ++ : zeroes ++;
    });
    console.log(plusses/arr.length);
    console.log(negatives/arr.length);
    console.log(zeroes/arr.length);
}
