////////////////////////////////////////////////////////////////////////
// Scroll to the bottom to where it says "Write your code here ..." to actually
// write your code. Just above that is a list of Math functions that you might
// find useful. Everything before that you can safely ignore--I am providing
// functions and other constants you may need to use in our code but nothing
// that you need to change even necessarily understand the internals of. You
// will however need to understand how to use these functions and constants as
// described in the questions.

const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

/*
 * Log the object via console.log.
 */
const log = (x) => { console.log(x); }

/*
 * Record an okay object.
 */
const recordOk = (x) => { log(`OK: ${x}`); }

/*
 * Record a not-okay object.
 */
const recordNotOk = (x) => { log(`NOT OK: ${x}`); }

/*
 * Record a meh object.
 */
const recordMeh = (x) => { log(`MEH: ${x}`); }

/*
 * This one is some particular dark magic. Definitely don't worry about
 * what it's doing.
 */
const hash = (s) => {
  return [...JSON.stringify(s)]
    .reduce((hash, c) => ((hash << 5) + hash) + c.codePointAt(0), 5381);
};

/*
 * An arbitrary predicate on numbers you will use in one function.
 */
const isLeet = (n) => n % 1337 === 0;

/*
 * Return a random number between 0, inclusive, and 10,000, exclusive.
 */
const random10k = () => rand(10_000);

/*
 * Return true if the argument is "okay". This implementation treats roughly
 * half of all possible values as okay and the other half as not okay. Which are
 * which is essentially random but is stable.
 */
const isOk = (x) => hash(JSON.stringify(x)) % 2 == 0;

/*
 * Return true if the argument is "meh".
 */
const isMeh = (x) => !isOk(x) && hash(JSON.stringify(x)) % 3 == 0;

/*
 * Record a pair.
 */
const pair = (a, b) => {
  log(`pair: ${a},${b}`);
};

////////////////////////////////////////////////////////////////////////
// For your reference, here are some functions and constants from Math
// that you might find useful

// Math.PI - a constant giving the closest approximation of π available
// Math.abs(n) - a function that computes the absolute value of its argument
// Math.ceil(n) - a function that rounds its argument up to the nearest integer
// Math.floor(n) - a function that rounds its argument down to the nearest integer
// Math.max(a, b) - a function that returns the largest of its arguments
// Math.min(a, b) - a function that returns the smallest of its arguments
// Math.sqrt(n) - a function that returns the square root of its argument

////////////////////////////////////////////////////////////////////////
// Write your code here ...


const chocolatesPerPerson = (choc, ppl) => {
  return Math.floor(choc / ppl)
}

const extraChocolates = (choc, ppl) => {
  return choc % ppl
}

const leftOut = (choc, ppl) => {
  if ((ppl - choc) < 0) {
    return 0
  } else if ((ppl - choc) > 0) {
    return ppl - choc
  }
}

const probabilityAllHeads = (n) => {
  return (.5 ** n)
}

const futureHour = (current, eventTime) => {
  return (current + eventTime) % 24
}

const presentsBudget = (nFriend, avPrice) => nFriend * avPrice

const wrappingCombos = (numPaper, numRibbons, numBows) => numPaper * numRibbons * numBows

const biggestNumber = (digits) => {
  let nines = ''
  for (let i = 0; i < digits; i++) {
    nines = nines + '9'
  }
  return nines;
}

const itemsLeftOver = (ppl, items) => {
  return items - (items % ppl)
}

const areaOfCircle = (r) => Math.PI * (r ** 2)

const volumeOfCube = (a) => a ** 3
//if this is wrong it's because google lied to me 

const populationGrowth = (num1, numDay) => numDay * num1

const earnedRunaverage = (eRuns, pIn) => {
  return (eRuns / pIn) * 9
}

const valueOfJewels = (numD, numE, valD, valE) => (valE * numE) + (valD * numD)

const payWithOverTime = (numWorked, normalRate, overRate) => ((numWorked - 8) * overRate) + (normalRate * 8)

const fireAlarm = (pulled, smoke, drill) => pulled || smoke || drill

const canBePresident = (age, naturalBorn, lived) => (Math.floor(age)) > 34 && naturalBorn && (Math.floor(lived)) > 13

const needSunScreen = (beach, ski) => beach || skiing

const canGoToProm = (senior, inviteSen, promEx) => (senior || inviteSen) && !promEx

const aFartherThanB = (num, num2, num3) => (num - num3) > (num2 - num3)

const swapFrontAndBack = (s) => s.substring(s.length/2) + s.substring(0, s.length/2)

const upDown = (s) => {
  return s.toUpperCase() + s.toLowerCase()
}

const isAllUpperCase = (s) => s.toUpperCase() === s

const upToX = (s) => {
  return s.substring(0, (s.indexOf('x')))
}

const slug = (s, s2, s3) => {
  return (s + '-' + s2 + '-' + s3).toLowerCase()
}

const logIfOk = (a) => {
  if (isOk(a) === true)
    log(a)
}

const classify = (v) => {
  if (isOk(v) === true) 
  recordOk(v) 
  else { 
  recordNotOk(v)
}
}

const countXs = (s) => {
  let xs = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'x')
      xs++
  }
  return xs
}

const allTheSame = ([a, b, c]) => (a === b) && (a === c)

const isSamePoint = (p1, p2) => {
  return (p1.x === p2.x) && (p1.y === p2.y)
} 

const area = (w, h) => w * h

const isWinner = (obj) => obj.score > 100 

