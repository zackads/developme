// In ping-pong the person who is serving changes every five plays. Write a function that takes the current score of each player and return true if it is time to change server and false if not.

let changeServer = (player1, player2) => (player1 + player2) % 5 === 0;

let result = changeServer(5, 0);
console.log("Expected: true, Actual: " + result);

result = changeServer(5, 3);
console.log("Expected: false, Actual: " + result);

result = changeServer(9, 6);
console.log("Expected: true, Actual: " + result);

result = changeServer(17, 8);
console.log("Expected: true, Actual: " + result);

result = changeServer(16, 8);
console.log("Expected: false, Actual: " + result);
