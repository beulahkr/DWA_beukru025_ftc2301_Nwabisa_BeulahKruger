const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

names.forEach(name => console.log(name));
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);
const characters = names.map(name => name.length);
console.log(characters);
const result = provinces.filter(province => !province.includes('Cape'));
console.log(result.length);
const checkForS = names.map(name => name.toLowerCase().includes('s'));
console.log(checkForS);
const final = names.reduce((finalObject, name, index) => {
  finalObject[name] = provinces[index];
  return finalObject;
}, {});
console.log(final);

const products = [
  { product: 'banana', price: '2' },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: '8' },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

products.forEach(item => console.log(item.product));
console.log(
  products.filter(item => item.product.length < 6),
  products.map(product => parseInt(product.price)).filter(price => !isNaN(price)).reduce((sum, price) => sum + price, 0),
  products.reduce((jibberish, item) => jibberish + item.product, ''),
  products.reduce((newProducts, item) => {
    const { product: name, price: cost } = item;
    newProducts.push({ name, cost });
    return newProducts;
  }, [])
);
