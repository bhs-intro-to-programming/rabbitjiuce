const countTens = (array) => {
  let count = 0 
  for (let i = 0; i < array.length; i++) { 
    if (array[i] === 10) { 
      count++
    } 
  }
  return count;
}

const sum = (array) => {
  let count=0 
  for (let thing =0; thing<array.length; thing ++) {
    count + thing
  }
  return count
}