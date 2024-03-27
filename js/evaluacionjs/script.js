1-let missatge = `Falten ${dies} dies perquè finalitzi el mes de ${mes}`;
2- 6
3- si el numero del dia esta entre el 0 o 6 va a mostrar el mensaje de "es cap de setmana!!",
si no esta entre el 0 o 6 va a mostrar el mensaje de "Uff, encara no es cap de setmana".
function weekend() {
    let dia = new Date().getDay();
    let missatge; // variable donde se almacena el mensaje.
    if (dia == 0 || dia == 6) {
        missatge = "Es cap de setmana!!";
    } else {
        missatge = "Uff, encara no es cap de setmana";
    }
    return missatge;
}
Si dejamos el return al principio no se ejecutaria. Hay que crear una variable para almacenar el mensaje
y retornarla al final.

4- La sentencia switch evalúa una expresión, comparando el valor de la expresión con una serie 
de cláusulas case y ejecuta sentencias después de la primera cláusula case con un valor 
coincidente, hasta que se encuentra una sentencia break. Se saltará a la cláusula predeterminada
 de una declaración de cambio si ningún caso coincide con el valor de la expresión.

 ejemplo: 
 const fruta = 'Papayas';
switch (fruta) {
  case 'limones':
    console.log('Los limones cuestan $0.49 cada uno');
    break;
  case 'Mangos':
  case 'Papayas':
    console.log('Mangos y papayas cuestan $2.79 el kilo.');
    break;
  default:
    console.log(`Perdon, no tenemos mas ${fruta}.`);
}
en este caso va a mostrar el mensaje de "Mangos y papayas cuestan $2.79 el kilo." porque el valor
de la variable fruta es "Papayas" y coincide con el case "Papayas".

5- 
Para lograr que los caracteres acentuados y los espacios en blanco se conviertan a la 
codificación %XX en una URL, podemos utilizar la función encodeURIComponent(). Esta función 
toma una cadena como argumento y devuelve una versión codificada de esa cadena, donde los 
caracteres no alfanuméricos (excepto - _ . ! ~ * ' ( )) son reemplazados por su secuencia de 
escape UTF-8, representada como %XX. 

const url = "http://bibarnabloc.cat/2020/07/31/ni aquí ni allí de tommy orange/";
const urlCodificada = encodeURIComponent(url);
console.log(urlCodificada);
// Salida: http%3A%2F%2Fbibarnabloc.cat%2F2020%2F07%2F31%2Fni%20aqu%C3%AD%20ni%20all%C3%AD%20de%20tommy%20orange%2F

6-
class Persona {
    constructor(nom, sobrenom, nacionalitat, edat, numero, equip, campionats_mundials) {
        this.nom = nom;
        this.sobrenom = sobrenom;
        this.nacionalitat = nacionalitat;
        this.edat = edat;
        this.numero = numero;
        this.equip = equip;
        this.campionats_mundials = campionats_mundials;
    }
}

const marc_marquez = new Persona("Marc Márquez Alentà", "Tro de Cervera", "espanyola", 30, 93, "Respsol Honda Team", [2010, 2012, 2013, 2014, 2016, 2017, 2018, 2019]);

7-
. Dado el siguiente código:
class valores {
 constructor(Valor1, Valor2) {
 this.Valor1 = Valor1;
 this.Valor2 = Valor2;
 }
};
let objete = new valores (37,50);
for (i in objete) {
 console.log(i);
}
¿Qué se mostrará por consola?
Se mostrará "Valor1" y "Valor2" porque son las propiedades del objeto objete.

class Valores {
    constructor(Valor1, Valor2) {
    this.Valor1 = Valor1;
    this.Valor2 = Valor2;
    }
   }
   
   let objete = new Valores(37, 50);
   for (let i in objete) {
    console.log(`${i}: ${objete[i]}`);
   }
    // Salida: Valor1: 37, Valor2: 50
    
    En este código, i representa el nombre de cada propiedad del objeto objete, y objete[i]
    accede al valor de esa propiedad. Esto permite que el bucle for...in muestre tanto los
    nombres de las propiedades como sus valores en la consola.

8- 
let cadena1 = 'Como dijo Hamlet “To be or not to be”.';
let cadena2 = cadena1.slice(18, 36); // Extraemos la sección deseada de la cadena1, 
desde el índice 18 hasta el 36, que son las posiciones de los caracteres "To be or not to be".
console.log(cadena2); // Mostramos el valor de cadena2 en la consola

9-
let matriz = ["elefante", "canguro", "hámster", "jirafa", "cocodrilo"];

// Ordenar la matriz alfabéticamente
matriz.sort();

// Invertir el orden de la matriz
matriz.reverse();

// Mostrar la matriz ordenada alfabéticamente de forma descendente en la consola
console.log(matriz);

