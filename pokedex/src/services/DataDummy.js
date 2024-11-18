export const weaknessName = [
   "normal", "fire", "water", "electric", "grass", "ice", "fighting", 
   "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", 
   "dragon", "dark", "steel"
 ]

 export const typeWeaknesses = {
   fire: ['water', 'rock', 'ground'],
   water: ['electric', 'grass'],
   grass: ['fire', 'ice', 'poison', 'flying', 'bug'],
   electric: ['ground'],
   ice: ['fire', 'fighting', 'rock', 'steel'],
   fighting: ['flying', 'psychic', 'fairy'],
   poison: ['ground', 'psychic'],
   ground: ['water', 'ice', 'grass', 'fairy'],
   flying: ['electric', 'ice', 'rock'],
   bug: ['fire', 'flying', 'rock'],
   rock: ['water', 'grass', 'fighting', 'ground', 'steel'],
   psychic: ['fighting', 'poison'],
   steel: ['fire', 'fighting', 'ground'],
   fairy: ['poison', 'steel'],
   dragon: ['ice', 'dragon', 'fairy'],
   dark: ['fighting', 'bug', 'fairy'],
   normal: ['fighting'],
};

 
 export const types = [
    {
     name: "Bug",
     id: 7
    },
    {
     name: "Dark",
     id: 17
    },
    {
     name: "Dragon",
     id: 16
    },
    {
     name: "Electric",
     id: 13
    },
    {
     name: "Fairy",
     id: 18
    },
    {
     name: "Fighting",
     id: 2
    },
    {
     name: "Fire",
     id: 10
    },
    {
     name: "Flying",
     id: 3
    },
    {
     name: "Ghost",
     id: 8
    },
    {
     name: "Grass",
     id: 12
    },
    {
     name: "Ground",
     id: 5
    },
    {
     name: "Ice",
     id: 15
    },
    {
     name: "Normal",
     id: 1
    },
    {
     name: "Poison",
     id: 4
    },
    {
     name: "Psychic",
     id: 14
    },
    {
     name: "Rock",
     id: 6
    },
    {
     name: "Steel",
     id: 9
    },
    {
     name: "Stellar",
     id: 19
    },
    {
     name: "Water",
     id: 11
    }
 ]
 
 export const typeColors = {
    grass: "bg-green-600",
    poison: "bg-purple-600",
    electric: "bg-yellow-500",
    fire: "bg-red-600",
    water: "bg-blue-600",
    bug: "bg-lime-600",
    flying: "bg-sky-500",
    fighting: "bg-orange-600",
    psychic: "bg-pink-600",
    normal: "bg-gray-400",
    ice: "bg-teal-400",
    ground: "bg-yellow-700",
    ghost: "bg-indigo-600",
    steel: "bg-gray-600",
    fairy: "bg-pink-300",
    dark: "bg-slate-700",
    Default: "bg-gray-300",
    dragon: "bg-purple-500",
    rock: "bg-gray-500",
    steel: "bg-gray-600"
  };
 
 export const generations = [
     {
     name: "Gen I",
     id: 1
    },
     {
     name: "Gen II",
     id: 2
    },
     {
     name: "Gen III",
     id: 3
    },
     {
     name: "Gen IV",
     id: 4
    },
     {
     name: "Gen V",
     id: 5
    },
     {
     name: "Gen VI",
     id: 6
    },
     {
     name: "Gen VII",
     id: 7
    },
     {
     name: "Gen VIII",
     id: 8
    },
     {
     name: "Gen IX",
     id: 9
    },
 
 ]
 
 export const excludedPokemon = ["deoxys", "giratina", "wormadam", "shaymin", "tornadus", "thundurus", "landorus", "meloetta","basculin", "keldeo", "darmanitan", "pumpkaboo", "zygarde", 
    "meowstic", "aegislash", "gourgeist", "lycanroc", "oricorio", "wishiwashi", "mimikyu", "minior", "basculegion", "urshifu", "toxtricity", "enamorus", "morpeko", "indeedee", "eiscue", "dudunsparce", "palafin", "maushold", "oinkologne", "tatsugiri", "squawkabilly"
  ];