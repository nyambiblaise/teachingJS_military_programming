//Re-write the getFirstGrade function without using if conditions.
const data={
    results:{
        grades:[10,20,30]
    }
}
const getFirstGrade = data => {
    if (data.results && data.results.grades) {
        return data.results.grades[0];
    }
    return undefined;
}
//solution
const getFirstGrade1 = (someGrades) => {
  return data.results?.grades?.[0];
}
console.log(getFirstGrade1(data));