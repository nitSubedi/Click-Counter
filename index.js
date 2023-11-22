let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment(){
    count = count+1
    countEl.textContent=count
    console.log(count)
}

function zeroer(){
    console.log("clear")
   if (window.confirm("This will Clear the count")){
    count = 0
    
   } 
   else{
    count = count
   }
    countEl.textContent=count
}

function save() {
    let countStr =  count + " - "
    saveEl.textContent += countStr
}