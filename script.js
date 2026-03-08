
const page1 = document.getElementById("page1")
const page2 = document.getElementById("page2")
const page3 = document.getElementById("page3")

const yesBtn = document.getElementById("yesBtn")
const noBtn = document.getElementById("noBtn")

const nextBtn = document.getElementById("nextBtn")
const rainBtn = document.getElementById("rainBtn")



yesBtn.onclick = () => {

page1.classList.remove("active")
page2.classList.add("active")

}



nextBtn.onclick = () => {

page2.classList.remove("active")
page3.classList.add("active")

}



function moveButton(){

const x = Math.random() * (window.innerWidth - 120)
const y = Math.random() * (window.innerHeight - 60)

noBtn.style.position = "absolute"
noBtn.style.left = x + "px"
noBtn.style.top = y + "px"

}

noBtn.addEventListener("mousemove", moveButton)
noBtn.addEventListener("touchstart", moveButton)



const container = document.getElementById("roseContainer")



rainBtn.onclick = () => {

setInterval(createRose, 80)

}



function createRose(){

const img = document.createElement("img")

img.src = "rose.png"

img.classList.add("rose")

const size = Math.random()*50 + 20

img.style.width = size + "px"

img.style.left = Math.random()*100 + "vw"

const duration = Math.random()*4 + 4

img.style.animationDuration = duration + "s"

container.appendChild(img)

setTimeout(()=>{

img.remove()

}, duration*1000)

}