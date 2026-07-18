let main = document.querySelector("main")
const box = document.createElement("div")
box.classList.add("box")
let btn = document.querySelector(".btn")
let timer = document.querySelector("#timer")
let scoree = document.querySelector("#score")


let score = 0 
let time = 0
let interval ;
let canScore = true;
console.log(timer)
function randomBox(){
    canScore = true 
    box.style.backgroundColor = randomColor()
    main.append(box)
    const rY = Math.random() * 80
    const rX = Math.random() * 80
    console.log("y", rY)
    console.log("x", rX)

    box.style.top = `${rY}%`
    box.style.left = `${rX}%`

}

const randomColor = ()=>{
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    return `rgb(${r},${g},${b})`
}

function resetGame() {
    time = 0;
    score = 0;

    timer.textContent = time;
    scoree.textContent = score;
}



//event
btn.addEventListener("click", () => {
    clearInterval(interval)
    
    interval = setInterval(() => {
        randomBox()

        time ++;
        timer.textContent = time
    }, 1000)
    

    setTimeout(()=>{
        clearInterval(interval)
        overlay.style.display = "flex"
        setTimeout(()=>{
            overlay.style.display ="none"
            resetGame()
        },3000)
    },10000)
})
console.log(time)


box.addEventListener("click",()=>{
    if(!canScore) return
    score++;
    scoree.textContent = score
    canScore = false
})
