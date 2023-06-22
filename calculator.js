function calc(a, b, operation){
  if(operation === "+"){
    return +a + +b;
  }
  else if(operation === "*"){
    return a * b;
  }
  else if(operation === "-"){
    return a - b;
  }
  else{
    console.log("use operators: add, multi, subtract")
  }
}

console.log(calc(5, 5, "+"))
console.log(calc(5, 5, "*"))
console.log(calc(10, 5, "-"))