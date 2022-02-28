// Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinturón de Orión',
  'AC/DC Camiseta',
];

function itemList(str) {
  let list = [];

  for (i = 0; i < products.length; i++) {
    if (products[i].includes(str)) {
      list.push(products[i]);
    }
  }
  return list;
}

console.log(itemList('Camiseta'));
