//Print odds 1 - 20
for(var i=1; i<=20; i++) {
  console.log(i);
}

//Decreasing multiples of 3 from 100 - 0
for(var i=99; i>=0; i-=3) {
  console.log(i);
}

//console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
for(var i = 4; i >= -3.5; i-=1.5) {
  console.log(i);
}

//add all of the values from 1-100 onto some variable sum and at the end console.log 
//the result 1 + 2 + 3 + ... + 98 + 99 + 100 should equal 5050
function numSum(n) {
  var sum = 0;
    for(var i=1; i<=n; i++) {
      sum += i;
    }
    return sum; 
}

console.log(numSum(100));

//multiply all of the values from 1-12 onto some variable product and at the end console.log 
//the result 1 * 2 * 3 * ... * 10 * 11 * 12 should equal 479001600 
function multiply(n) {
  var total = 1
    for(var i =1; i<=n; i++) {
      total = total * i;
    }
    return total;
}

console.log(multiply(12));