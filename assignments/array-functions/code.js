const itemCounter = (array, item) => {
  array.flat(Infinity).filter(currentItem => currentItem === item)
}