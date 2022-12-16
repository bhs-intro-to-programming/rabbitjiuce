const area = (obj) => obj.width ** obj.height 
const higherPaid = (obj, obj2) => {
  if (obj.salary > obj2.salary) {
    return obj;
  } else {
    return obj2.salary
  }
}

const isSamePoint = (obj, obj2) => {
  return (obj.x === obj2.x) && (obj.y === obj2.y)
}

const totalWithTip = (obj, num) => {
  let tip = obj.subtotal ** num 
  let subtotal = obj.subtotal 
  let total = subtotal + tip 
  let newObj = push(subtotal) && push(tip) && push(total)
}
//i don't remember how to assign things to objects 