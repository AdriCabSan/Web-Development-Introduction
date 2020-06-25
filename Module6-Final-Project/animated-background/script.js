const canvas= document.getElementById("canvas1")
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particlesArray;
let mouse = {
    x: null,
    y: null,
    radius: (canvas.height/80) * (canvas.width/80)
}

window.addEventListener('mousemove',
    function(event){
        mouse.x = event.x
        mouse.y = event.y
    }
)

class Particle {
    constructor(x,y,directionY,directionX,size,color){
        this.x=x
        this.y=y
        this.directionX=directionX
        this.directionY=directionY
        this.size=size
        this.color=color
    }
}
drawParticle(){
    ctx.beginPath()
    ctx.arc(this.x,this.y,this.size,0,Math.PI *2,false)
    ctx.fillStyle = '#8C5523'
    ctx.fill()
}

updateParticlePosition(){

}
init() {
    particlesArray=[]
    let numberOfParticles = (canvas.height * canvas.width) / 9000
    for(let i = 0; i < numberOfParticles; i++){
        particlesArray.push(new Particle(x,y,directionX,directionY,size,color));
    }
}
function animate(){
    requestAnimationFrame(animate)
    ctx.clearRect(0,0,innerWidth,innerHeight)

    for(let i=0; i < particleArray.length; i++){
        particlesArray[i].
    }
}
init()
animate()