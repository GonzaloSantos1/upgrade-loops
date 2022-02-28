// Usa un for...in para imprimir por consola los datos del alienígena..

const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg',
};

for (let key in alien) {
  console.log("My alien's " + key + ' is ' + alien[key]);
}
