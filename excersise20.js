function describe({ name, age, city, vertical }) {
  return `${name} is ${age} years old, lives in ${city}, and works in ${vertical}.`;
}


a = describe({
  name: "Puran",
  age: 24,
  city: "Thimphu",
  vertical: "Dev"
});
console.log(a) 