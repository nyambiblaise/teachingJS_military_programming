//Complete the getCartTotal function such that it returns the total value of the cart. This can be calculated by multiplying the price by the quantity and returning its sum.
const sampleProducts = [{
    price: 10,
    quantity: 3
}, {
    price: 5,
    quantity: 4
}]
const findTotal = (items) => {
  return items.reduce((total,current)=>{
      return total + (current.price * current.quantity);
  },0)
}
console.log(findTotal(sampleProducts))