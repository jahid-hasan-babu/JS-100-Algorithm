function sum(params1, params2) {
  return params1 + params2;
}
console.log(sum(1, 3));

function totalSum(...param1) {
  let total = 0;
  param1.forEach((perElm) => {
    total += perElm;
  });
  return total;
}

console.log(totalSum(1, 2));
