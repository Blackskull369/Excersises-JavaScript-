function splitBill(total, people,tippercentage) {
    return ((total + (tippercentage/100 * total)) / people);
}
console.log(splitBill(1000, 4, 10));
