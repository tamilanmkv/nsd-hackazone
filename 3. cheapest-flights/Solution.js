function findCheapestPrice(n, flights, src, dst, k) {
    // add your solution here
}

// Test case 1
const flights1 = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]];
console.log("Actual: " + findCheapestPrice(4, flights1, 0, 3, 1) + ", Expected: 700");

// Test case 2
const flights2 = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]];
console.log("Actual: " + findCheapestPrice(4, flights2, 0, 3, 0) + ", Expected: -1");

// Test case 3
const flights3 = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]];
console.log("Actual: " + findCheapestPrice(3, flights3, 0, 2, 0) + ", Expected: 500");