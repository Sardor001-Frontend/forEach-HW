// 1 Задание найти самое большое число и самое маленькое число 

const nums = [1, 2, 3, 4, 45, 5, 6, 7898, 9, 43, 22, 1, 5, 7, 1];

let biggest = [];
let smallest = [];

let max = -Infinity; 
let min = Infinity; 

nums.forEach(num => {
  if (num > max) max = num; 
  if (num < min) min = num; 
});

biggest.push(max); 
smallest.push(min); 

console.log("Массив с самым большим числом:", biggest); 
console.log("Массив с самым маленьким числом:", smallest); 

// 2 Задание найти самое длинное имя 
let names = ["Max", "Shaha", "Abubakr", "Azam", "Behruz", "Aziz", "Safina", "Samir", "Ruxshona", "Azim", "Miraziz", "Nuriddin", "Sardor"];

let longestname = [];
let maxLength = 0;

names.forEach(name => {
  if (name.length > maxLength) {
    maxLength = name.length;
    longestname = [name]; 
  } else if (name.length === maxLength) {
    longestname.push(name); 
  }
});

console.log("Самое длинное имя (или имена):", longestname);
