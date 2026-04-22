const trainees = [
  { name: "Karma", score: 82 },
  { name: "Dorji", score: 91 },
  { name: "Sonam", score: 74 },
  { name: "Pema", score: 88 }
];

const topScorer = trainees.sort((a, b) => b.score - a.score);
const sorted = topScorer[0];

console.log(sorted); 
