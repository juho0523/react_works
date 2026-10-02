const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(x => x * 2);
console.log(newArr); // [2, 4, 6, 8, 10]

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

console.log(`users 0번지 : ${users[0].name}`);


const userNames = users.map(user => user.name);
console.log(userNames); // ['Alice', 'Bob', 'Charlie']



const userAges = users.map(user => user.age);
console.log(userAges); // [25, 30, 35]