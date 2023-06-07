class GradeManager{
    constructor(grades) {
        this.grades = grades;
    }
    getNumberOfGrades(){
        return this.grades.length;
    }
    getFirstGrade(){
        return this.grades[0];
    }
    getLastGrade(){
        return this.grades[this.grades.length-1];
    }
    getSumOfGrades(){
        let sum = 0;
        let ss = grades.forEach(function (s) {
            sum+=s;
        });
        return sum;
    }
    getAverageGrade(){
        //EITHER method 1
        return this.getSumOfGrades()/this.getNumberOfGrades();
        //OR method 2
        let sum = 0;
        let p = grades.forEach(function (f) {
            sum = sum + f;
        });
        return sum / this.grades.length;
    }
    exportGradeToCSV(){
        return this.grades.join(",");
    }
}
let myGrades = [5,8,10,56,90,1];
let user = new GradeManager(myGrades);
console.log(user.getNumberOfGrades());