function checkAge(age) {
  if(age === '' || age === undefined || age === null){
    console.log(`Empty! The value isn't typed :( or value is: ${age}`)
  }
  else if(age < 18){
    console.log(`You've just: ${age} years old! You are not allowed`)
  }
  else if (age >= 18){
    console.log(`you are welcome!`)
  }
  else{
    console.log(`Type value with type number. Value that you typed is: ${typeof(age)}`)
  }
}

checkAge(5)
checkAge(10)
checkAge()