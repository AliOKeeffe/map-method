  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop

let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num *2);
}

console.log(results)

// Using map() The map method expects me to pass it a function which will  be called on each element of the nums array.  

const multByTwo = function (num) {
  return num * 2;
}
const mapResults = nums.map(multByTwo); 
console.log(mapResults)


// Simplified w/ map()
const simplified = nums.map(function(num){return num * 2}); 
console.log(simplified)

// Simplfied w/ map() + arrow function
const arrow = nums.map(num => num * 2); 
console.log(arrow)

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIDs = students.map(student => [student.name, student.id]);
console.log(studentsWithIDs)

// return the name and id key value pair from each student in the object
const studentsWithIDsObj = students.map(student => ({"name": student.name, "id": student.id}))
console.log(studentsWithIDsObj)

// add the students age to each student in the object
let ages = [32, 26, 28]
const studentsWithIDs1 = students.map(student => ({...student, "age":ages[student.id-1]}))
console.log(studentsWithIDs1)

// add the students age to each student in the object
let ages1 = {Mark:32, Ariel:26, Jason:28}
const studentsWithIDs2 = students.map(student => ({...student, "age":ages1[student.name]}))
console.log(studentsWithIDs2)


