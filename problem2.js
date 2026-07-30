// Problem Statement 2 
function isElevatorSafe(weights) {
  if (!Array.isArray(weights)) {
    return "Invalid"; // Input Type Check //
  }
  let sum = 0;

 for (let weight of weights) {
    sum = sum + weight; // loop in Array get total weights
  }
  if (sum < 400) {
    return "Safe";
  } else {
    return "Unsafe";
  }
};


