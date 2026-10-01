let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];

console.log(arr3);

let obj1 = { product: '노트북', price: 200000 };
let obj2 = { category: '전자제품', brand: 'Samsung' };
let obj3 = { ...obj1, ...obj2 };

console.log(obj3);

const { product, price, category, brand } = obj3;
console.log(`Product: ${product}, Price: ${price}, Category: ${category}, Brand: ${brand}`);