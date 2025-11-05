/*Ejercicio 4: Sistema de figuras geométricas
Crea un sistema de clases para figuras geométricas:
1.Clase Figura con propiedad color y método area() que devuelve 0.
2.Clase Rectangulo que herede de Figura y añada base, altura. Sobrescribe area().
3.Clase Circulo que herede de Figura y añada radio. Sobrescribe area().
Crea instancias y muestra sus áreas.*/


class Figura{
    constructor(color){
        this.color = color;

    }area(){

        return 0;
    }
}

class Rectangulo extends Figura{
    constructor(color, base, altura){
        super(color);
        this.base = base;
        this.altura = altura;
    }area(){

        return `Color: ${this.color}, Area Triangulo: ${(this.base *  this.altura)}`
   }
}

class Circulo extends Figura{
    constructor(color, radio ){
        super(color);
        this.radio = radio;

    }area(){

        return `Color: ${this.color}, Area del circulo: ${(Math.PI * this.radio **2).toFixed(2)}` //.toFixed método que redondea un número y lo convierte en un string con dos decimales en este caso
   }
}
//Math objeto global, no se importa.


//creando instancia ...
const rectangulo1 = new Rectangulo("rojo", 20, 30);
const circulo1 = new Circulo("azul", 7);
console.log(rectangulo1.area())
console.log(circulo1.area())