const countTens = (ns) => {
  let count = 0 
  for (a = 0; a < ns.length; a++) { 
    if (ns[a] === 1) { 
      count++
    } 
  }
  return count;
}