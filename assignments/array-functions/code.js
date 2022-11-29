const countTens = (ns) => {
  let count = 0 
  for (i = 0; i < ns.length; i++) { 
    if (ns[i] === 1) { 
      count++
    } 
  }
  return count;
}