// https://www.hackerrank.com/challenges/counting-valleys/problem
// replace existing function with same name with the code below.

function countingValleys(n, s) {
    var steps = s.split('');
    var elevation = 0;
    var vallies = 0;
    steps.map((element) => {
        element === 'U' ? elevation++ : elevation--;
        element === 'U' && elevation === 0 ? vallies++ : null;
    })
    return vallies;
}
