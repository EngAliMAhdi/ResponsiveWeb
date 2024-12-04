let nums = document.querySelectorAll(".stats .number");
let statsPos= document.querySelector(".stats");
let start= false;
window.onscroll = function () {
    if(window.scrollY >= statsPos.offsetTop){
        if(!start){
            nums.forEach((num)=>setCount(num));
        }
        start=true;
    }
}
function setCount(num) {
    let goal= num.dataset.goal;
    let count = setInterval(() => {
        num.textContent++;
        if(num.textContent==goal){
            clearInterval(count);
        }
    }, 2000/goal);
}