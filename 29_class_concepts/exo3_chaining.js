class BookSale {
    constructor() {
        this.amount = 800;
        this.currency = "usd";
        this.isStudent = false;
    }
    applyStudentDiscount(discountValue){
        this.discount = this.amount - ((discountValue/100) * this.amount) ;
        return this;
    }
}