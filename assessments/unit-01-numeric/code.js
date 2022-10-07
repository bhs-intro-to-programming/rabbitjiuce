// Some constants you will need. No need to do anything to these
const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

const itemsLeftOver = (people, items) => {
  return items%people 
}; 

const areaOfCircle = (radius) => {
  return Math.PI * (radius ** 2)
}; 

const volumeOfCube = (side) => {
  return side * side * side 
}; 

const populationGrowth = (currentPop, averageGrowth) => {
  return currentPop * (averageGrowth + 100) 
}; 

const earnedRunAverage = (givenRuns, pitchedInnings) => {
  return (givenRuns/pitchedInnings) * 9 
}; 

const valueOfJewels = (numDiamonds, numEmeralds, diamondGold, emeraldGold) => {
  return (numDiamonds * diamondGold) + (numEmeralds * emeraldGold)
}; 

const payWithOvertime = (hoursWork, hourRate, overRate) => {
  return (hoursWork * hourRate) + ((hoursWork-8) * overRate)
}; 
//I would add Math.abs but it says 'assuming they worked 8 hours' so I'm guessing I don't need to?

const firstClassPostage = (letterOunces) => {
  return 60 + ((letterOunces-1) * Math.ceil) * 24
}; 

const weightOnJupiter = (personWeight) => {
  return (JUPITER_GRAVITY/JUPITER_GRAVITY) * personWeight
}; 

const gravity = (body1, body2, distance) => {
  return ((body1 * body2)/distance**2) * G 
}; 
