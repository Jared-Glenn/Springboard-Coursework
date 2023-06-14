let body = document.querySelector("body");
console.log("Working")

document.addEventListener("mousemove", function(e){
    let x = Math.floor(((e.pageX)/window.innerWidth)*255);
    let y = Math.floor(((e.pageY)/window.innerWidth)*255);
    console.log(x, y)

    body.style.backgroundColor = `rgb(${x},0,${y})`
})