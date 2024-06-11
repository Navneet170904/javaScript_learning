const marvel_heros = ["hulk", "Ironman", "CaptianAmerica"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread opertor
// console.log(all_new_heros);

const anotherArray = [1, 2, 3, [4, 5, 6, 7], 8, 9, [10, 11]]
const real_Array = anotherArray.flat(Infinity)
// console.log(real_Array);

// console.log(Array.isArray("Navneet"));
// console.log(Array.from("Navneet"));
// console.log(Array.from({name: "Navneet"})); // it always give an empty string [] always convert into keys or values.


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));