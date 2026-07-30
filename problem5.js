// Problem 5 —Debugging Challenge: API Response Time Monitor

function averageResponseTime(times) {
  if (!Array.isArray(times)) {
    return "Invalid";
  }

  if (times.length === 0) {
    return "Invalid";
  }

  let total = 0;
  for (let i = 0; i < times.length; i++) {
    total = total + times[i];
  }

  return total / times.length;
}
