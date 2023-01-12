"use strict";

const currencies = [
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
];

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR", "USD"]);

currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
