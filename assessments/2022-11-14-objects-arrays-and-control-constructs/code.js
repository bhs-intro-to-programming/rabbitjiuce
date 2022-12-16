const area = (obj) => obj.width ** obj.height 
const higherPaid = (obj, obj2) => {
  if obj.salary > obj2.salary {
    return obj
  } else {
    return obj2.salary
  }
}