
let numero = 2
let negativo= -3
let flotante = 9.8
let flotanteNegativo = -6.7
let booleano=true
const constante=3;

let strings= "hola mundo"
let objeto = {
    propiedadNumerica: numero,
    propiedadDeTexto: strings,
    propiedadBooleana: booleano
}


function sumar(a,b){
return a + b
}
const funcionSumar= sumar(5,5)
funcionSumar
//-----Classes------//
/**
 * Es una forma de emular las clases de otros lenguajes como Java,usando la misma 
 * Prototypal inheritance que esta por default en javascript,la cual no se puede cambiar
 */
class Person {
    name;
    constructor(name) {
    this.name = name
    }
    hello() {
    return 'Hello, I am ' + this.name + '.'
    }
}

/**
 * Person es su identificador de clase,se instancian con new
 * Cuando se inicializa una nueva instancia de Person,se ejecuta el metodo constructor
 * hello() es un metodo,las clases pueden tener multiples metodos para llamar
 * Ejemplo de llamada a la instancia de una clase:
 * */
const flavio = new Person('Flavio')
flavio.hello()
//Class Inheritance//

/**
 * Una clase puede extender otra clase, y los objetos inicializados usando esa clase heredan todos los
 * métodos de ambas clases.
 */

//dentro de una clase puedes referenciar a la clase padre llamando a super() .
class Programmer extends Person {
    hello() {
    return super.hello() + ' I am a programmer.'
    }
}

const flavio = new Programmer('Flavio')
const marcelo= new Programmer('Marcelo')
flavio.hello() //se imprimiria "Hello, I am Flavio. I am a programmer."

//Metodos Estaticos//
/**Hay metodo que se pueden ejecutar desde la clase,cuando son valores
 *  que quieres tengan acceso a todas las instancias
 * */

class Person {
    i=0
    static genericHello() {
    return 'Hello' +'' + this.i++;
    }
}
Person.genericHello() //Hello
flavio.i//1
marcelo.i//1
Person.genericHello()
flavio.i//2
marcelo.i//2


//Default Parameters//
const doSomething = (param1 = 'test', param2 = 'test2') => {
}
doSomething("","")

/**
 * Hace tiempo,si teniamos que pasar un objeto de opciones a una funcion
 * Para que tuviera valores default de esas opciones si una de ellas no
 * estaba definida le tenias que poner mucho codigo asi:
 */
const colorize = (options) => {
    if (!options) {
    options = {}
    }
    const color = ('color' in options) ? options.color : 'yellow'
    //codigo a ejecutar
    }
/**Ahora es mucho mas sencillo */
const colorize = ({ color = 'yellow' }) => {}
/**Sino se pasa un objeto all lamar nuestra funcion colorize,le podemos asignar un valor vacio por default */
const spin = ({ color = 'yellow' } = {}) => {

}



//Template Literals//
/**Usando las backticks `` se potencializa la forma de usar strings en JS */
const a_string = `something`
/**
* ofrecen una gran sintaxis para definir cadenas multilíneas
* proporcionan una forma fácil de interpolar variables y expresiones en las cadenas
* te permiten crear DSLs con etiquetas de plantilla (DSL significa lenguaje específico del dominio),
* y se usa por ejemplo en React con los Styled Components, para definir CSS para un componente)

*   Aqui mas ejemplos:
*/

/**Strings multilinea */
const stringMultilinea = `Hey
this
string
is awesome!`
/**Se imprimira tal cual los espacios por lo que si quieres que salga sin espacios usa la funcion trim() */
const string = `
First
Second`.trim()

/**Interpolation */
/*Una forma facil de poner valores,variables,resultados en strings*/
const test = 'test'
const string = `something ${test}` //something test
const string = `something ${1 + 2 + 3}`
const string2 = `something ${foo() ? 'x' : 'y'}`
/**Template Tags */

/*Estos se usan muchisimos en frameworks como GraphQL,o React Styled Components ,
 * Ejemplos:
 */
const Button = styled.button`
font-size: 1.5em;
background-color: black;
color: white;
`
//Destructuring assignments//
/*Dado un objeto,puedes extraer algunos valores y ponerlos como variables con nombres */
const person = {
    firstName: 'Tom',
    lastName: 'Cruise',
    actor: true,
    age: 54, //made up
}
const {firstName: name, age} = person

/**Esta sintaxis tambien funciona en arreglos */
const a = [1,2,3,4,5]
const [first, second] = a

/**Crea 3 variables con los valores de los indices 0,1,4 del arreglo a */
const [first, second, , , fifth] = a


//Enhanced Object Literals//
/*antes de ES6 se hacia asi*/
const something = 'y'
const x = {
something: something
}
/*ahora es asi mas sencillo*/
const something = 'y'
const x = {
something
}


//Dynamic properties//
const x = {
    ['a' + '_' + 'b']: 'z'
}
x.a_b //z