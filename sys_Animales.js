/*Ejercicio 5: Sistema de animales
Modela un sistema de animales con:
1.Clase Animal con nombre, edad y método emitirSonido().
2.Clase Perro que herede de Animal y sobrescriba emitirSonido().
3.Clase Gato que herede de Animal y sobrescriba emitirSonido().
Crea instancias y haz que emitan sonidos.*/

class Animal{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;

    }emitirSonido(){

        return `${this.nombre}, de ${this.edad} meses, esta haciendo`;
    }
}

class Perro extends Animal{
    constructor(nombre, edad){
        super(nombre, edad);
        
    }emitirSonido(){
    
       return `${super.emitirSonido()} Gua Gua`;
    }
    
}

class Gato extends Animal{
    constructor(nombre, edad){
        super(nombre, edad);

    }emitirSonido(){
    
       return `${super.emitirSonido()} Miau Miau`;
    }

}
//creando la instancia ...
const perro1 = new Perro(" 🐕 Pastor Aleman", 6);
const gato1 = new Gato("🐈‍⬛ Susu", 3)

//llamado al metodo para imprimir
console.log(perro1.emitirSonido());
console.log(gato1.emitirSonido());
