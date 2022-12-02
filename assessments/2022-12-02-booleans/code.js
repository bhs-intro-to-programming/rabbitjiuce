const needHeavyCoat = (out, cold) => out && cold 
const needSunscreen = (beach, skiing) => beach || skiing 
const needMittens = (out, warm) => out && !warm 
const isVenomous = (striped, blueHead) => striped || !blueHead 
const okaySpeed = (speedLimit, speed) => (speed < (speedLimit+11)) && (speed > (speedLimit - 11))
const twiceAsExpensive = (price, otherPrice) => (2*price) > otherPrice 
const winningRecord = (wins, losses, ties) => (wins/2 + losses/2 + ties/2) < wins