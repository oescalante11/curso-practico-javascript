// codigo del cuadrado

function perimetroCuadrado(lado) 
{
    lado *= 4;
    return lado;
}

function areaCuadrado(lado)
{
    lado *= lado;
    return lado;
}


// codigo del triangulo

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo)
{
    perimetro = parseInt(ladoTriangulo1) + parseInt(ladoTriangulo2) + parseInt(baseTriangulo);
    return perimetro;
}

function areaTriangulo( ladoTriangulo1, baseTriangulo )
{
    area = ( ladoTriangulo1 * baseTriangulo ) / 2;
    return area;
}

function alturaTrianguloIsoseles(lado1, lado2, base)
{
    if (lado1 === lado2 && lado1 != base) 
    {
        const alturaTriangulo = Math.sqrt( ( lado1 * lado1 ) - ( ( base / 2 ) * ( base / 2 ) ) );
        console.log(alturaTriangulo);
        return alturaTriangulo;
    }
    else if (lado1 === base && lado1 != lado2) 
    {
        const alturaTriangulo = Math.sqrt( ( lado1 * lado1 ) - ( ( lado2 / 2 ) * ( lado2 / 2 ) ) );
        console.log(alturaTriangulo);
        return alturaTriangulo;
    }
    else if (lado2 === base && lado2 != lado1) 
    {   
        const alturaTriangulo = Math.sqrt( ( lado2 * lado2 ) - ( ( lado1 / 2 ) * ( lado1 / 2 ) ) );
        console.log(alturaTriangulo);
        return alturaTriangulo;
    }
    else
    {    
        const alturaTriangulo = "No es triangulo isoseles";
        return alturaTriangulo;
    }
}

// codigo del circulo

// Diametro
function diametroCirculo(radioCirculo)
{
    diametro = radioCirculo * 2;
    return diametro;
} 

// Perimetro
function perimetroCirculo(radioCirculo)
{
    perimetro = (radioCirculo * 2) * Math.PI;
    return perimetro;
}

// Area
function areaCirculo(radioCirculo)
{
    area = ( radioCirculo * radioCirculo ) * Math.PI;
    return area;
}

// Interaccion con HTML

function calcularPerimetroCuadrado()
{
    const input = document.getElementById("inputCuadrado").value;    
    const perimetro = perimetroCuadrado(input);
    alert(perimetro);
}

function calcularAreaCuadrado()
{
    const input = document.getElementById("inputCuadrado").value;    
    const area = areaCuadrado(input);
    alert(area);
}

function calcularPerimetroTriangulo()
{
    const lado1 = dolado2.getElementById("lado1").valado2;
    const inputLado2Triangulo = document.getElementById("inputLado2Triangulo").value;
    const base = document.getElementById("base").value;  

    const perimetro = perimetroTriangulo(lado1, inplado2, base);
    alert(perimetro);    
}

function calcularAreaTriangulo()
{
    const lado1 = dolado2.getElementById("lado1").valado2;
    const inputLado2Triangulo = document.getElementById("inputLado2Triangulo").value;
    const base = document.getElementById("base").value;

    const area = areaTriangulo(lado1, inplado2, base);
    alert(area);    
}

function calcularAlturaTriangulo()
{
    const lado1 = document.getElementById("inputLado1Triangulo").value;
    const lado2 = document.getElementById("inputLado2Triangulo").value;
    const base = document.getElementById("inputBaseTriangulo").value;
    
    const altura = alturaTrianguloIsoseles(lado1, lado2, base);
    alert(altura);
}

function calcularDiametroCirculo()
{
    const inputRadio = document.getElementById("inputRadio").value;
    diametro = diametroCirculo(inputRadio);
    alert(diametro);
}

function calcularPerimetroCirculo()
{
    const inputRadio = document.getElementById("inputRadio").value;
    perimetro = perimetroCirculo(inputRadio);
    alert(perimetro);
}

function calcularAreaCirculo()
{
    const inputRadio = document.getElementById("inputRadio").value;
    area = areaCirculo(inputRadio);
    alert(area);
}