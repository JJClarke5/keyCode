const keyPressed = document.getElementById("keyPressed")
const keyCodePressed = document.getElementById("keyCodePressed")
const characterCodePressed = document.getElementById("characterCodePressed")

document.addEventListener("keypress",(event)=>{
    characterCodePressed.textContent = event.charCode
    keyCodePressed.textContent = event.code
    keyPressed.textContent = event.key
})