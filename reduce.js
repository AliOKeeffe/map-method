  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:

// The accumulator represents the value that will  ultimately be returned from the reduce method.  
// current value, represents the current array  item that the callback function is being run on.  

const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr)=> acc + curr, 0);
console.log(sum)

// to demo what acc and curr do
let sum1 = nums.reduce((acc, curr)=> {
    console.log(
        "Accumulator", acc,
        "Current Value", curr, 
        "Total", acc + curr
    );
    return acc + curr

});
console.log(sum1)
// the function only executed four times even though  there were five elements in the array of numbers.
// If you don’t specify an initial value,  the accumulator will default to the first element  in the array. In this case that element was zero,    

let sum2 = nums.reduce((acc, curr)=> {
    console.log(
        "Accumulator", acc,
        "Current Value", curr, 
        "Total", acc + curr
    );
    return acc + curr

},10 );
console.log(sum2)


const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];
  
// Totaling a specific object property - total team experience as a whole
  
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience)

// Grouping by a property, and totaling it too
// at this point in the function, the accumulator  is an empty object and curr is the first team member in the array.

let experienceByProfession = teamMembers.reduce((acc, curr)=> {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience;
    }
    return acc;

  }, {});

  console.log(experienceByProfession)