function x(a,b){
    return [b,a]
}
console.log(x(5,10));   

//ANTHER WAY WITHOUT USING FUNCTION
let c = 2
let d = 3 
c = (c + d) - c
d = (c + d - 1) - c
console.log(c)
console.log(d)
