//Complete the getProduct function such that it returns the product (multiplication) of the value in every recording.
const sampleRecordings = [{
    value: 2,
}, {
    value: 5
}];
const findProducts = (x) => {
  return x.reduce((t,c)=>{
      return t * c.value;
  },1);
}
console.log(findProducts(sampleRecordings))