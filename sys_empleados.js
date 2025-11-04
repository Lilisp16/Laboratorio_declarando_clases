/*Ejercicio 2: Sistema de empleados 
Crea un sistema de clases para representar empleados de una empresa:
1. Clase Empleado con propiedades: nombre, edad, salarioBase y método calcularSalario() que devuelve el salario base.
2.Clase Gerente que herede de Empleado y añada bonificacion. Sobrescribe calcularSalario() para que sume la bonificación.
3.Clase Desarrollador que herede de Empleado y añada lenguaje. El salario es igual al base.
Crea instancias de cada tipo y muestra sus salarios. */


class Empleado{
    constructor(nombre, edad, salarioBase){
    this.nombre = nombre;
    this.edad = edad;
    this.salarioBase = salarioBase;

    }calcularSalario(){

        return this.salarioBase;
    }
    
}

class Gerente extends Empleado {
    constructor(nombre, edad, salarioBase, bonificacion){
        super(nombre, edad, salarioBase)
        this.bonificacion = bonificacion

    }calcularSalario(){

         return this.salarioBase + this.bonificacion;
        
    }

}

//Clase Desarrollador que herede de Empleado y añada lenguaje. El salario es igual al base.

class Desarrollador extends Empleado{
    constructor(nombre, edad, salarioBase, lenguaje){
        super(nombre, edad, salarioBase);
        this.lenguaje = lenguaje;

    }calcularSalario(){

        return this.salarioBase;

    }

}


//Crea instancias de cada tipo y muestra sus salarios. */
const gerente1  = new Gerente("Carlos", 28, 1000, 450)
const desarrollador1  = new Desarrollador("Juan", 28, 2000, "Ingles")
console.log(`El salaio del gerente ${gerente1.nombre}: ${gerente1.calcularSalario()}`)
console.log(`El salario del desarrollador ${desarrollador1.nombre}: ${desarrollador1.calcularSalario()} porque el habla ${desarrollador1.lenguaje}`)
