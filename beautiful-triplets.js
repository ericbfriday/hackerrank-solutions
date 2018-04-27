// Beautiful Triplets
// https://www.hackerrank.com/challenges/beautiful-triplets/problem

function beautifulTriplets(d, arr) {
    let count = 0;
    arr.map((ele, idx)=>{
        if(arr.includes(ele + d && ele + d*2, idx)) { return count++; };
    });
    return count;
}
