var mouseEvent="empty"
canvas = document.getElementById("myCanvas")
ctx=canvas.getContext('2d')
var lastpositionofx,lastpositionofy
color="red"
lineWidth=3
canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){
    mouseEvent="mousedown"
color=document.getElementById("color").value
lineWidth=document.getElementById("lineWidth").value
}

canvas.addEventListener("mouseleave",mymouseleave)
function mymouseleave(e){
    mouseEvent="mouseleave"
}

canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e){
    mouseEvent="mouseup"
}

canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e){
    currentpositionofx=e.clientX-canvas.offsetLeft
    currentpositionofy=e.clientY-canvas.offsetTop
    if(mouseEvent=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=lineWidth
        console.log("last position of x and y ="+lastpositionofx+","+lastpositionofy)
        ctx.moveTo(lastpositionofx,lastpositionofy)
        ctx.lineTo(currentpositionofx,currentpositionofy)
        console.log("current position of x and y ="+currentpositionofx+","+currentpositionofy)
        ctx.stroke()
    }
    lastpositionofx=currentpositionofx
    lastpositionofy=currentpositionofy
    
    

}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    
}