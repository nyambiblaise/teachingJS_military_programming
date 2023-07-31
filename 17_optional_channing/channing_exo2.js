//Re-write the getPaymentValue function without using if conditions.
const user = {
    payment:{
        details:{
            value:100
        }
    }
}
const getPaymentValue = user => {
    if (user.payment && user.payment.details && user.payment.details.value) {
        return user.payment.details.value;
    }
    return undefined;
}
//correction...
const getPaymentValue1 = (someUser) => {
  return someUser.payment?.details?.value;
}
console.log(getPaymentValue1(user))