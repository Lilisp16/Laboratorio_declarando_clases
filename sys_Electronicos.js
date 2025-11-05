/*Ejercicio 3: Sistema de productos electrónicos
Modela un sistema de productos electrónicos con:
1.Clase Producto con nombre, precio, marca y método descripcion().
2.Clase Telefono que herede de Producto y añada almacenamiento, ram.
3.Clase Laptop que herede de Producto y añada procesador, pulgadas.
Crea instancias y muestra sus descripciones.*/

class Producto {
    constructor(nombre, precio, marca){
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
      

    }descripcion(){

        return `Producto: ${this.nombre}, Precio: ${this.precio} USD, Marca: ${this.marca}`
    }
}

class Telefono extends Producto{
    constructor(nombre, precio, marca, almacenamiento, ram){
        super(nombre, precio, marca);
        this.almacenamiento = almacenamiento;
        this.ram = ram;  
        
    }descripcion(){

        return `${super.descripcion()}, Almacenamiento: ${this.almacenamiento} GB, Ram: ${this.ram} MB`
    }
}

//3.Clase Laptop que herede de Producto y añada procesador, pulgadas
class Laptop extends Producto{
    constructor(nombre, precio, marca, procesador, pulgadas){
        super(nombre, precio, marca);
        this.procesador = procesador;
        this.pulgadas = pulgadas;

    }descripcion(){

        return `${super.descripcion()}, Procesador: ${this.procesador}, Pulgadas: ${this.pulgadas}`;

    }
}

const telefono1 = new Telefono("Telefono", 1000, "Samsung", 80, 8)
const laptop1 = new Laptop("Laptop", 1000, "Apple", "intel", 16)

console.log(telefono1.descripcion());
console.log(laptop1.descripcion());