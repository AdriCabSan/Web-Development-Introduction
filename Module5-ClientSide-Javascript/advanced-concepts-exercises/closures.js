//

//para Function composition
const makeIncrementer = function(a) {
    return function(b) {
        return a + b
    }
}

const incBy10 = makeIncrementer(10)
console.log(incBy10(5)) //prints 15


const newTag = function(open, close) {
    return function(content) {
        return open + content + close
    }
}

const bold = newTag('<b>', '</b>')
const italic = newTag('<i>', '</i>')

console.log(bold(italic("This is my content!")))
//<b><i>This is my content!</i></b