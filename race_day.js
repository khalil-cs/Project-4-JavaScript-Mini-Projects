let age = prompt("Enter your age: ");
// let registerEarly = prompt("Did you register early? (yes/no): ");

// const registerEarly = false;  // checking late adult
const registeryEarly = true;  // checking early adult

raceNumber = Math.floor(Math.random() * 1000);

// Check Adult + Early
if (age > 18 && registerEarly) {
  raceNumber += 1000;
}

// Early Adult
if (age > 18 && registerEarly) {
  console.log(`Your race number is ${raceNumber} and you will race at 9:30 am.`);
}
// Late Adult
else if (age > 18 && !registerEarly) {
  console.log(`Your race number is ${raceNumber} and you will race at 11:00 am.`);
}

// Youth Runner
else if (age < 18) {
  console.log(`Your race number is ${raceNumber} and you will race at 12:30 pm.`);
}

// Adult who did not register early (and is exactly 18)
else if (age === 18 && !registerEarly) {
  console.log(`Your race number is ${raceNumber} and you will race at 11:00 am.`);
}

// Adult who did not register early (and is over 18)
else {
  console.log('Please see the registration desk.');
}

