// console.log(students);
// sayName('sumit');

// have access to students from data.js

const updateStudents = students.map(function(student){
// console.log(student);
student.role = 'student'
return student;

});

// console.log(updateStudents);

const highScores = students.filter(function(student){
 // if(student.score >= 80){
 //  return student; // a value that coerces to true
 // }
 // if(student.score >= 80) return student;
 return student.score >= 80;
});
// console.log(highScores);

const specificId = students.find(function(student){
 return student.id === 1;
});

const fruits = ['banana','orange'];

const random = fruits.find(function(fruit){
 return fruit === 'orange'
})
// console.log(random);
// console.log(specificId);

const averageScore = students.reduce(function(scoresTotal,student){
 // console.log(student);
 console.log(scoresTotal);
 return scoresTotal + student.score;
},0);

// console.log(averageScore);

const subject = 'history';

const total = {};
total[subject] = 'some value';
// console.log(total);

const survey = students.reduce(function(survey,student){
 // console.log(student.favouriteSubject);
 const favSubject = student.favouriteSubject;
 if(survey[favSubject]){
 survey[favSubject] = survey[favSubject] + 1
 }
 else{
  survey[favSubject] = 1;
 }
 return survey 
},{});

console.log(survey);


