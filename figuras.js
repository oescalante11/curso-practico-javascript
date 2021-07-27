// codigo del cuadrado
console.group("Cuadrados")
const ladoCuadrado = 5;

console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// codigo del triangulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 + "cm, "
    + ladoTriangulo2 + "cm, " 
    + baseTriangulo + "cm"
    );

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = ( ladoTriangulo1 * baseTriangulo ) / 2;

console.log("El área del triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

// codigo del circulo
console.group("Circulos");

// Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + " cm");

// Diametro
const diametroRadio = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroRadio + " cm");

// PI
const PI = Math.PI;
console.log("El valor de PI es: " + PI);

// Perimetro
const perimetroCirculo = diametroRadio * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + " cm");
// Area
const areaCirculo = ( radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + " cm^2");

console.groupEnd();