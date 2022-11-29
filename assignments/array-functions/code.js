const countTens = (ns) => ns.reduce((acc, n) => acc + (n === 10 ? 1 : 0), 0);
