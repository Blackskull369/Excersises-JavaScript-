function greet(name, hour) {
    if (hour < 12 && hour > 0){
        return `Good morning, ${name}!`;
    } else if (hour >= 12 && hour < 17) {
        return `Good afternoon, ${name}!`;
    } else if (hour > 17 && hour <= 24) {
        return `Good evening, ${name}!`;
    } else {
        return 'Invalid hour';
    }
}
a = greet("Puran", 20);
console.log(a); 