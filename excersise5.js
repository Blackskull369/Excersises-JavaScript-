const CtoF = (c) => {
    return (c * 9/5) + 32;
}
const FtoC = (f) => {
    return (f - 32) * 5/9;
}
a = CtoF(0);
b = FtoC(32);
console.log(a);
console.log(b);

