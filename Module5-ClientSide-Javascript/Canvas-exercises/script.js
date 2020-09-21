const canvas= document.getElementById('canvas1');
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let particleArray = []
const numberOfParticles=100

///obtener posicion del mouse dentro del navegdor
const mouse = 
{
    x: null,
    y: null
}
window.addEventListener('mousemove', function(event) {
    mouse.x = event.x
    mouse.y = event.y
    // console.log(mouse.x,mouse.y)
})
setInterval(function(){
    mouse.x = undefined
    mouse.y = undefined
},200)

//Crear particulas
class Particle {
    constructor(x,y,size,color,weight){
        this.x = x
        this.y = y
        this.size = size 
        this.color = color
        this.weight = weight
    }
    draw(){
        ctx.beginPath()
        //arc dibuja un circulo de acuerdo a los valores dados
        ctx.arc(this.x,this.y,this.size,0,Math.PI * 2, false) 
        ctx.fillStyle=this.color
        ctx.fill(); //dibujar un circulo por completo
    }
    calculateCurrentParticlePosition(){
    //reducimos el tamaño de cada particula por cada frame de animacion
    this.size -= 0.067
    //se reducira hasta que el tamaño de la particula llegue haste 0
    //si son menors que 0 se resetearan y apareceran donde quiera que se encuentre el cursor del mouse 
    if (this.size < 0) {
        //la posicion del mouse en el eje x,y sera el valor de su posicion actual 
        //mas un valor al azar entre -10 y +10
        this.x =(mouse.x +((Math.random() * 20) - 10))
        this.y =(mouse.y +((Math.random() * 20) - 10))
        //tamaño al azar entre 2 y 12 pixeles
        this.size =(Math.random() * 10) + 2
        //magnitud entre -0.5 y 1.5
        this.weight =(Math.random() * 2) -0.5
    }
    //se hacen las particulas caer en en el eje de las y,añadiendole el valor de su magnitud
    //al valor actual de su posicion en y
    this.y += this.weight
    //aqui hacemos las particulas mas pesadas(mas magnitud)
    //esto tambien las hara rebotar mas mas alto si caen de una altura alta
    this.weight += 0.3
    if(this.y > canvas.height -this.size){
        this.weight *= -1
    }

    }
}

function init(){
   particleArray=[];
   for(let i=0; i < numberOfParticles; i++){
       let x = Math.random() * canvas.width
       let y = Math.random() * canvas.height
       let size = (Math.random() * 5) + 2
       let r=(Math.random()*255)
       let g=(Math.random()*225)
       let b=(Math.random()*215)
       let color = `rgba(${r},${g},${b},0.78)`
       let weight = 1;
       particleArray.push(new Particle(x,y,size,color,weight))
   }
}
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    for(let i = 0; i < particleArray.length; i++){
        particleArray[i].calculateCurrentParticlePosition()
        particleArray[i].draw()
    }
    requestAnimationFrame(animate)
}
init()
animate()