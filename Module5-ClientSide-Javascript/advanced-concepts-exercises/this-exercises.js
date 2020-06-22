//Cuando se define como un método de un objeto, en una función regular,
// esto se refiere al objeto por lo que puedes hacer:
const car = {
    model: 'Fiesta',
    manufacturer: 'Ford',
    fullName: function() {
    return `${this.manufacturer} ${this.model}`
    }
}
//llamar car.fullName() regresara "Ford Fiesta" .

// El scope de this con funciones de flecha se hereda del contexto de ejecución.
// Una función de flecha no vincula a this en absoluto, por lo que su valor se buscará en la pila de llamadas,
// Por lo que en este código car.fullName() no funcionará, y devolverá la cadena "undefined undefined:"
const car = {
    model: 'Fiesta',
    manufacturer: 'Ford',
    fullName: () => {
    return `${this.manufacturer} ${this.model}`
    }
}

/*Due to this, arrow functions are not suited as object methods.
Arrow functions cannot be used as constructors either, when instantiating an object will raise a
TypeError .

This is where regular functions should be used instead, when dynamic context is not
needed.
This is also a problem when handling events. DOM Event listeners set this to be the target
element, and if you rely on this in an event handler, a regular function is necessary*/

const link = document.querySelector('#link')
link.addEventListener('click', () => {
// this === window
})
const link = document.querySelector('#link')
link.addEventListener('click', function() {
// this ===link
})