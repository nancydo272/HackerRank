//Given an array of integers, find the sum of its elements.
//Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.
//simpleArraySum has the following parameter(s):
//ar: an array of integers
//Example: ar = [1, 2, 3]
//Return: 6

function simpleArraySum(ar) {
    let sum = 0; 
    for(let i=0; i<ar.length; i++){
        sum += ar[i]; 
    }
    console.log(sum);
    return sum;  
}
simpleArraySum([1,2,3]);
console.log("Hey");
//don't need to call functions on hackerRank b/c returning ?