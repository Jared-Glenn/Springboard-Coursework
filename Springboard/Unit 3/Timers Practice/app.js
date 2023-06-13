
function countDown(num){
    let interval = setInterval(function(){
        if (num>0){
            console.log(num);
            num--;
        }
        else{
            console.log("DONE!");
            clearInterval(interval);
        }
    }, 1000)
}

function randomGame(){
    let tries = 0;
    let gameInterval = setInterval(function(){
        let attempt = Math.random();
        console.log(attempt)
        if (attempt<=0.75){
            tries += 1;
        }
        else{
            tries+=1;
            console.log(tries);
            clearInterval(gameInterval);
        }
    }, 1000)
}