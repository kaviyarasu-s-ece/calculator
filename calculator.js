let arr = []
const SIZE = 100
let mp = document.getElementsByClassName("box")

function updateDisplay() {
    mp[0].innerText = arr.join("")
}

function setStyle(size, color) {
    mp[0].style.fontSize = size
    mp[0].style.color = color
}

function append(a) {
    arr.push(a)
    updateDisplay()
    setStyle("3rem", "white") 
}

function cr() {
    arr = []
    updateDisplay()
    setStyle("2.5rem", "white")
}

function po() {
    arr.pop()
    updateDisplay()
}

function display() {
    try {
        let result = eval(arr.join(""))
        mp[0].innerText = result
        arr = [String(result)]
        setStyle("3.5rem", "#00ff99") 
    } 
    catch {
        mp[0].innerText = "Error"
        arr = []
        setStyle("3rem", "red")      
    }
}
