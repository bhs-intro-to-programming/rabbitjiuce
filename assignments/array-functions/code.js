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
  return evens;
}

const anyOverOneHundred = (array) => {
  for (let i = 0; i<array.length; i++) {
    if (array[i] > 100) {
      return true 
    }
  }
  return false 
}

//const pyramid = (array) => {
//  const idk = [];
//  for (let i = 1; i<array.length; i++) {
//    for (let j = 1; i<array.length; j++) {
//       idk.push[i]; 
//    } 
//  } 
//return idk; 
//}

const pyramid = (n) => {
  const p = [];
  for (let i = 1; i < n + 1; i++) {
    for (let j = 0; j < i; j++) {
      p.push(i);
    }
  }
  return p;
};