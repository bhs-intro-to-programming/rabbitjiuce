const yesIfEven = (num) => {
  return num%2 === 0 
}

const countXs = (s) => {
  let count = 0; 
  for (let i=0; i<s.length; i++) {
    if (s[i] === 'x') {
      count++ 
    }
  }
  return count 
}

const timesTable = (n) => {
  for (let i=0; i<n; i++) {
    let product = ((n-i)**2) + product 
    return product 
  }
}