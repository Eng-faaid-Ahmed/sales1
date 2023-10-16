const dailyTarget = 435 / 22;
const monthlyTarget = dailyTarget * 22;
const totalTarget = monthlyTarget * 2;

console.log(`Daily Target Sales: $${dailyTarget.toFixed(2)}`);
console.log(`Monthly Target Sales: $${monthlyTarget.toFixed(2)}`);
console.log(`Total Target Sales: $${totalTarget.toFixed(2)}`);

const readline = require('readline');

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.question('Enter the month (1-12): ', (month) => {
 const dailyTarget = 435 / 22;
 const monthlyTarget = dailyTarget * 22;
 const totalTarget = monthlyTarget * 2;

 console.log(`Daily Target Sales: $${dailyTarget.toFixed(2)}`);
 console.log(`Monthly Target Sales: $${monthlyTarget.toFixed(2)}`);
 console.log(`Total Target Sales: $${totalTarget.toFixed(2)}`);

 rl.close();
});