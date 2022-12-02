const needHeavyCoat = (out, cold) => out && cold 
const needSunscreen = (beach, skiing) => beach || skiing 
const needMittens = (out, warm) => out && !warm 
const isVenomous = (striped, blueHead) => striped || !blueHead 
const okaySpeed = (speedLimit, speed) => (speed < (speedLimit+11)) && (speed > (speedLimit - 11))