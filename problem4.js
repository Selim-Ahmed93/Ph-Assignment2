// Problem 4 — Top Rated Restaurant Finder

function topRatedRestaurant(restaurants) {
  if (!Array.isArray(restaurants) || restaurants.length === 0) {
    return "Invalid Input"; // Input Type Check //
  }

  let topRestaurant = restaurants[0];

  for (let restaurant of restaurants) {
    if (restaurant.rating > topRestaurant.rating) {
      topRestaurant = restaurant;
    }
  }
  return topRestaurant.name.toUpperCase();
};

console.log(topRatedRestaurant([{ name: "Chillox", rating: 4.5 }, { name: "Sultan's Dine", rating: 4.8 }]));
