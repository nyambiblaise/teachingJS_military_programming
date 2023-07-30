//Write a function called calculateSalesTotals() which returns an array with new two new keys (sale and total). The key 'sale' equals the calculated sale price based on the original price and the discount. The key 'total' equals the computed total based on stock, the original price and the discount. You have to use Object Destructuring on the objects in the sales array and Object Default Values for the discount key. The default value would be 0.0.

let calculateSalesTotals = (sales, total)=>{
    const [originalPrice,discount=0.0] = sales;
    const [stock,...sales] = total;

    sales['sale'] = sales - originalPrice*discount;
    sales['total'] = sale.sale * sale.stock;
    return sales;
}