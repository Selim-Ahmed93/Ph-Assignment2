// Problem 3 — AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
  if (typeof tokensUsed !== "number" || tokensUsed < 0) {
    return "Invalid"; //Input Type Check Number or Negative number and String
  }

  if (tokensUsed <= 500) {
    return 0;
  }
  let freeToken = tokensUsed - 500;
  let costing = Math.floor(freeToken / 100) * 5;

  return costing;
};

