// https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
    /*
     * Write your code here.
     */
    var sortedArr = arr.sort((a, b) => a - b);
    var lowest = sortedArr[0] + sortedArr[1] + sortedArr[2] + sortedArr[3];
    var  highest = sortedArr[1] + sortedArr[2] + sortedArr[3] + sortedArr[4];
    
    console.log(lowest + ' ' + highest);

}
