/* Ejercicio 1: Sistema básico de vehículos 
Crea un sistema de clases para representar diferentes tipos de vehículos. Debes crear:
1. Una clase Vehiculo con propiedades: marca, modelo, año y un método obtenerDetalles() que devuelva un string con toda la información.
2. Una clase Coche que herede de Vehiculo y añada la propiedad numeroPuertas.
3. Una clase Moto que herede de Vehiculo y añada la propiedad cilindrada.
Crea instancias de ambas clases hijas y muestra sus detalles. */

class Vehiculo{
    constructor(marca, modelo, placa, año){
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
        this.año = año;
    }obtenerDetalles(){

        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Placa: ${this.placa}, Año: ${this.año}`;
    }
    
}
    

// herencia: Una clase Coche que herede de Vehiculo y añada la propiedad numeroPuertas.

class Coche extends Vehiculo {
    constructor(marca, modelo, placa, año, numeroPuertas){
        super(marca, modelo, placa, año);
        this.numeroPuertas = numeroPuertas;

    }obtenerDetalles() {

        return `${super.obtenerDetalles()}, Puertas: ${this.numeroPuertas}`;
    }
}


//Una clase Moto que herede de Vehiculo y añada la propiedad cilindrada.

class Moto extends Vehiculo {
        constructor(marca, modelo, placa, año, cilindraje){
        super(marca, modelo, placa, año);
        this.cilindraje = cilindraje;

    }obtenerDetalles(){
        
        return `${super.obtenerDetalles()}, Cilindraje: ${this.cilindraje}`;
    }
}

//Crea instancias de ambas clases hijas y muestra sus detalles. 
//(marca, modelo, placa, año, numeroPuertas/cilindraje)
 // creando instancia 

const coche1 = new Coche("Mazda", "2010", "6cc1", "2023", 4)
const moto1 = new Moto("KTM", "DUKE", "43BB", "2024", 200)

console.log(moto1.obtenerDetalles());
console.log(coche1.obtenerDetalles());

