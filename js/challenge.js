// global variables
let startNumber = 0
let pauseNumber = 0
let paused = ""
let timer;
const obj = {}
const num = 0
let numLikes = 0
const numArray = []
const list = document.querySelector("#list")
const form = document.querySelector(`#comment-form`)

// listeners
document.getElementById("minus").addEventListener("click", reduceTime)
document.getElementById("plus").addEventListener("click", increaseTime)
document.getElementById("pause").addEventListener("click", counter)
document.getElementById("heart").addEventListener("click", countHeart)
// document.querySelector(`#comment-form`).addEventListener('submit', postComment)
form.addEventListener('submit', postComment)


// callback functions

function reduceTime(){
    document.getElementById("counter").innerHTML = startNumber--
}

function increaseTime(){
    document.getElementById("counter").innerHTML = startNumber++
}

function postComment(event){
    let p = document.createElement("p")
    let comment = document.getElementById("comment-input").value
    p.textContent = comment  
    list.appendChild(p)
    event.preventDefault()
    form.reset()

}


function countHeart(){

    console.log("inside countHeart");
    
    //WORKING.create list, append at end of code block
    let listItem = document.createElement("li") 
    let ul = document.querySelector(".likes")
    
    let faveNumber = document.getElementById("counter").innerHTML //get favourited number and store in faveNumber   
    const result = numArray.find(({ num }) => num === faveNumber) //check array for faveNY=umber, returns number if found or undefined it not in array

    
    // WORKING. add num object to array or increment num object in array
    if (result === undefined){
        let newNum = {
            num: faveNumber,
            numLikes: 1
        }
        numArray.push(newNum) //WORKING
        listItem.setAttribute("id", `num${faveNumber}`)
        listItem.textContent = `${faveNumber} has been liked ${newNum.numLikes} time`
        ul.appendChild(listItem)
    }else{
        result.numLikes ++
        ul.querySelector(`#num${faveNumber}`).textContent = `${faveNumber} has been liked ${result.numLikes} times`

    }
    
}




function counter(){
    
    pauseNumber = startNumber
    
    // if startNumber not zero, stop/pause counter with clearinterval
    if(startNumber === 0){
        timer = setInterval(() => {document.getElementById("counter").innerText = startNumber++}, 1000)
        paused = "not paused"
    }
    // if paused get current counter value and store in pauseNumber, and inject into counter, reset timer when restarting setInterval
    else if (paused === "paused"){
        text = document.getElementById("counter").innerText
        pauseNumber = parseInt(text)
        timer = setInterval(() => {document.getElementById("counter").innerText = pauseNumber++}, 1000)
        paused = "not paused"
        document.getElementById("pause").textContent = "pause"
        document.getElementById("minus").disabled = false;
        document.getElementById("plus").disabled = false;
        document.getElementById("heart").disabled = false;
        document.getElementById("submit").disabled = false;
    }
    // else when "not paused" and startNumber/pauseNumber not zero, get current counter and store in pauseNUmber and clear timer 
    else (
        text = document.getElementById("counter").innerText,
        pauseNumber = parseInt(text),   
        paused = "paused",
        document.getElementById("pause").textContent = "resume",
        document.getElementById("minus").disabled = true,
        document.getElementById("plus").disabled = true,
        document.getElementById("heart").disabled = true,
        document.getElementById("submit").disabled = true,
        clearInterval(timer), 
        timer = null 
    )
    
}



counter()



