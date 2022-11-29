const countTens = (a) => a.search(/[10]/) 
const sum = (a) => {
  return a.substring(a.length)
}

const countTens = (ns) => ns.reduce((acc, n) => acc + (n === 10 ? 1 : 0), 0);
