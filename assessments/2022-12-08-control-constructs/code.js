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
  //there isn't an emit function? or it's not visible, i guess, but it's returning as 'undefined'
}

const containsX = (s) => {
  for (let i=0; i<s.length; i++) {
  }
  return (s[i] === 'x')
}

const sumSquares = (n) => {
  let sum = 0 
  for (let i =0; i<n; i++) {
    let sum = (n-i)**2 + sum 
  }
}