
// Time Complexity O(1). 
// Space Complexity O(1).
function SumOfMultiples(){ 
  let sum = 0; 
  for(let i=0;i<1000;i++){ 
    if(i%3===0||i%5===0)
      sum += i; 
  }
  return sum; 
}

console.log(SumOfMultiples()); 
