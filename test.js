// Importar las funciones a probar
const {
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound,
  } = require("./app"); // Asegúrate de que el archivo principal se llame "app.js"
  
  // Pruebas para fromDollarToYen
  test("Convierte 100 USD a JPY", () => {
    const result = fromDollarToYen(100);
    expect(result).toBeCloseTo(14626.17, 2); // Usamos toBeCloseTo para comparar números decimales
  });
  
  // Pruebas para fromEuroToDollar
  test("Convierte 50 EUR a USD", () => {
    const result = fromEuroToDollar(50);
    expect(result).toBeCloseTo(53.5, 2);
  });
  
  // Pruebas para fromYenToPound
  test("Convierte 10000 JPY a GBP", () => {
    const result = fromYenToPound(10000);
    expect(result).toBeCloseTo(55.59, 2);
  });