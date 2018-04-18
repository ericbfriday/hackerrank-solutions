// https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
    return grades.map((ele)=> {
        return (ele >= 38 && ele % 5 >= 3) ? ele + 5 - (ele % 5) : ele;
    });
}
