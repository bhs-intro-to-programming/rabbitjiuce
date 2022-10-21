/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

// i don't know if i'm supposed to do this but why not 

const fireAlarm = (alarmPulled, smoke, fireDrill) => alarmPulled || smoke || fireDrill 
const canBePresident = (age, citizen, livedInUSA) => (age>34) && citizen && (livedInUSA>13) 
const willSeeTweet = (followTweet, followRetweet, blocked) => (followTweet || followRetweet) && !blocked 
const evenGreaterThanZero = (x) => (x > 0) && !(x % 2 != 0) 

const isLeapYear = (year) => (year/4 && !year/100) || (year/400 && year/100) 

const firstAndLast = (s) => s[0] + s.length 