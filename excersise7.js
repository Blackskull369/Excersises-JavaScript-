function cheaperPerUnit(priceA, qtyA, priceB, qtyB) {
    const unitPriceA = priceA / qtyA;
    const unitPriceB = priceB / qtyB;
    if (unitPriceA < unitPriceB) {
        return "A"
    } else if (unitPriceA > unitPriceB){
        return "B"
    } else {
        return "Equal"

    }

}
console.log(cheaperPerUnit(10, 2, 15, 3)); 
