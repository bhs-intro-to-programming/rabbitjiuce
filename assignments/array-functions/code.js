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
  let total = 0 
  for (let i = 0; i < array.length; i++) {
    total = total + array[i] 
  }
  return total 
}

const evens = (array) => {
  const evens = [] ;
    for (let i = 0; i < array.length; i++) { 
      if (array[i]%2 === 0) {
        evens.push(array[i]);
      }
  }
}