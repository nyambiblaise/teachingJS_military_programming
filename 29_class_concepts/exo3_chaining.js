class BookSale {
    constructor() {
        this.amount = 800;
        this.currency = "usd";
        this.isStudent = false;
    }
    applyDiscount(discountValue){
        this.discount = this.amount - ((discountValue/100) * this.amount) ;
        return this;
    }
    setCurrency(curr){
        this.currency = curr;
        return this;
    }
    setStudentDiscount(){
        this.amount = 800;
        this.isStudent = true;
        return this;
    }
}
const sales = new BookSale();
console.log(sales.setStudentDiscount().setCurrency("EUR").applyDiscount(10));