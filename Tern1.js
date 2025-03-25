let a = Math.floor(Math.random() * 100);

// if...else
let result;

if ((a > 10 ? a : a * 2) > 5) {
  result = (2 * a) + 1;
} else {
  if ((a < 3 ? 1 : 2 * (a - 2)) > 4) {
    result = 5;
  } else {
    result = (a % 2 === 0 ? 6 : 7);
  }
}

console.log("Результат if...else: ", result);

// switch
let resultSwitch;

if ((a > 10 ? a : a * 2) > 5) {
  resultSwitch = (2 * a) + 1;
} else {
  let intermediateResult = (a < 3 ? 1 : 2 * (a - 2));
    if (intermediateResult > 4) {
        resultSwitch = 5;
    } else {
        resultSwitch = (a % 2 === 0 ? 6 : 7);
    }
}

console.log("Результат switch: ", resultSwitch);let a = Math.floor(Math.random() * 100);

// if...else
let result;

if ((a > 10 ? a : a * 2) > 5) {
  result = (2 * a) + 1;
} else {
  if ((a < 3 ? 1 : 2 * (a - 2)) > 4) {
    result = 5;
  } else {
    result = (a % 2 === 0 ? 6 : 7);
  }
}

console.log("Результат if...else: ", result);

// switch
let resultSwitch;

if ((a > 10 ? a : a * 2) > 5) {
  resultSwitch = (2 * a) + 1;
} else {
  let intermediateResult = (a < 3 ? 1 : 2 * (a - 2));
    if (intermediateResult > 4) {
        resultSwitch = 5;
    } else {
        resultSwitch = (a % 2 === 0 ? 6 : 7);
    }
}

console.log("Результат switch: ", resultSwitch);
