const getX = (object) => object.x


const point = (x,y) => {
  return {'x':x, 'y':y}
}

const emptyObject = () => {
  return {}
}

const distance = (p1, p2) => {
return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2)
}

const midpoint =(p1, p2) => {
  return {'x' : (p1.x + p2.x)/2, 'y' : (p1.y + p2.y)/2} 
}

const sumSalaries = (x) => {
  let salaries = 0
  for (let i =0; i<x.length; i++) {
    let salaries = salaries + x[i].salary
  }
}

const summarizeBooks = ([myArray]) => {
  return myArray.title + myArray.pages 
}
//how do i make it multiple 




const x = ['boo', 'gah', 'slay']