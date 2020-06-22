/**
 * A "node" is any object in the DOM hierarchy while an "element" is one specific node.
"Nodes" can include elements, text content inside an element, code comment blocks not visible to the user,
 the document itself and even abstract types like "fragments"
 */

/**Create elements */
const div = document.createElement('div');

/**Query dom */

const container = document.querySelector('#container');
// select the #container div (don't worry about the syntax, we'll get there)

console.dir(container.firstElementChild);                      
// select the first child of #container => .display

const controls = document.querySelector('.controls');   
// select the .controls div

console.dir(controls.previousElementSibling);                  
// selects the prior sibling => .display

/**Styles inline */
div.style.color = 'blue';                                      
// adds the indicated style rule

div.style.cssText = 'color: blue; background: white';          
// adds several style rules

div.setAttribute('style', 'color: blue; background: white');    
// adds several style rules

/**Attributres */
div.setAttribute('id', 'theDiv');                              
// if id exists update it to 'theDiv' else create an id
// with value "theDiv"

div.getAttribute('id');                                        
// returns value of specified attribute, in this case
// "theDiv"

div.removeAttribute('id');                                     
// removes specified attribute

/**Classes */
div.classList.add('new');                                      
// adds class "new" to your new div

div.classList.remove('new');                                   
// remove "new" class from div

div.classList.toggle('active');                                
// if div doesn't have class "active" then add it, or if
// it does, then remove it

div.textContent = 'Hello World!'                               
// creates a text node containing "Hello World!" and
// inserts it in div

div.innerHTML = '<span>Hello World!</span>';                   
// renders the html inside div