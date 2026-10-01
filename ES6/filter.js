const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(x => x * 2);
console.log(newArr); // [2, 4, 6, 8, 10]

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

const userNames = users.map(user => user.name);
console.log(userNames); // ['Alice', 'Bob', 'Charlie']

const userAges = users.map(user => user.age);
console.log(userAges); // [25, 30, 35]

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = nums.filter(x => x % 2 === 0);   
console.log(evens); // [2, 4, 6, 8, 10]

const odds = nums.filter(x => x % 2 !== 0);    
console.log(odds); // [1, 3, 5, 7, 9]

const adults = users.filter(user => user.age >= 30);
console.log(adults); // [{ name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]

const adultNames = adults  
                    .filter(user => user.age >= 30)
                    .map(user => user.name);
console.log(adultNames); // ['Bob', 'Charlie']