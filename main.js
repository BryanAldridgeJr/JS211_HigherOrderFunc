// .MAP() 
const sports = [
    { sport: "Baseball" },
    { sport: "Football" },
    { sport: "Basketball" },
];
  
const sportsIvePlayed = sports.map((sport) => {
    return { ...sport, played: "yes" };
});

console.log(sportsIvePlayed) // {sport: 'Baseball', played: 'yes'}, {sport: 'Football', played: 'yes'}, {sport: 'Basketball', played: 'yes'}
 
// .REDUCE()

const gameScores = [16, 23, 18, 24, 15];
const totalPoints = gameScores.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalPoints); // 96

// .FILTER()

const filterItems = ['Basketball', 'Football', 'Baseball', 'Soccer', 'Hockey', 'Cricket', 'Track', 'Swimming']

const filteringHigh = filterItems.filter((word) => word.length > 7); // ['Basketball', 'Football', 'Baseball', 'Swimming']
const filteringLow = filterItems.filter((word) => word.length < 7); // ['Soccer', 'Hockey', 'Track']

console.log(filteringHigh); // ['Basketball', 'Football', 'Baseball', 'Swimming']
console.log(filteringLow); // ['Soccer', 'Hockey', 'Track']