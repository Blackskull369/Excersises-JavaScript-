const trainees = [
  { name: "Karma", vertical: "Dev" },
  { name: "Dorji", vertical: "QA" },
  { name: "Sonam", vertical: "Dev" },
  { name: "Pema", vertical: "BA" }
];

const dev = trainees
  .filter(x => x.vertical === "Dev")
  .map(x => x.name);

console.log(dev); 
