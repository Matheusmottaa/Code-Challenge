// Time Complexity O(1)
// Space Complexity O(n)
function smallestDivisor(number){ 
  let aux = 0; 
  const answer = findSmallest(number, aux);
  return answer; 
}

function findSmallest(n,aux){ 
  if(n===1) return aux; 
  if(n%2===0 && n%3===0 && n%10===0){ 
    aux = n; 
  }
  return findSmallest(n-1,aux); 
}

console.log(smallestDivisor(1000)); // Expected return 30. 
