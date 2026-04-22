function isPalendrome(str) {
    let a = str.toLowerCase();
    for (let i = 0; i < a.length / 2; i++) { 
        if (a[i] !== a[a.length - 1 - i]) {
            return false;
        }
        else {
            return true;
        }

}
} 
console.log(isPalendrome("Madam"));
