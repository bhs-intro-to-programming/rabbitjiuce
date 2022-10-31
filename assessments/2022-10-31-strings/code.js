/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton and more credit for a skeleton with a
// reasonable argument list. To get full credit you need to write a correct
// function but you can get partial credit for a function that is basically
// correct even if contains small mistakes.


const firstHalf = (s) => {
  return s.substring (0, s.length/2)
}

const secondHalf = (s) => s.substring(s.length/2)

let s = 'abcdefg'

const upDown = (s) => s.toUpperCase() + s.toLowerCase() 

const firstFewEveryOther = (s) => {
  return s[0] + s[2] + s[4]
}

const upDownLastCharacter = (s) => {
  return s[s.length-1].toUpperCase() + s[s.length-1].toLowerCase()
}

const firstAndLast = (s) => {
  return s[0] + s[s.length-1]
}

let f = 'fghjkkla'  

const swapFrontAndBack = (s) => {
  return s.substring(s.length/2) + s.substring(0, s.length/2)
}

let a = 'happyhalloweeeeeeeeeeeeeeeen'

const simplePigLatin = (s, num) => {
  return s.substring (num, s.length-1) + s.substring(0, num) + 'ay'
}
 
const randomCharacter = (s) => s.substring[rand(s.length-1)] 
