
let number = prompt("Write some number here if you don't mind");

let resoult;

if (number <= -1) {
    resoult = -1
} 
else if (number >= 1) {
    resoult = 1
}
else {
    resoult = 0
}
const alertNumber = alert(resoult);