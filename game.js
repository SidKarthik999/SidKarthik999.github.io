// Matthew Idea 
//the thingy you have to click will apear for a certain amount of time. if you click and you click not on the thingy then you lose points 
//x and y randomized every time you click it
//If you don't click the balloon in the amount of time you lose
//make a bomb thingy that if you click it u lose
// beat score thingy

var speed = "Slow"

function Init() {
    bomb = document.getElementById("veggieBomb");
    asparagus = document.getElementById("asparagus")
    burger = document.getElementById("hamburger")
    burger2 = document.getElementById("hamburger2")
    burger3 = document.getElementById("hamburger3")
    burger4 = document.getElementById("hamburger4")
    burger5 = document.getElementById("hamburger5")
    burger6 = document.getElementById("hamburger6")
    burger7 = document.getElementById("hamburger7")

    asparagusW = screen.height - asparagus.height;
    asparagusH = screen.width - asparagus.width;

    burgerW = screen.height - burger.height;
    burgerH = screen.width - burger.width;

    burger2W = screen.height - burger2.height;
    burger2H = screen.width - burger2.width;

    burger3W = screen.height - burger3.height;
    burger3H = screen.width - burger3.width;

    burger4W = screen.height - burger4.height;
    burger4H = screen.width - burger4.width;

    burger5W = screen.height - burger5.height;
    burger5H = screen.width - burger5.width;

    burger6W = screen.height - burger6.height;
    burger6H = screen.width - burger6.width;

    burger7W = screen.height - burger7.height;
    burger7H = screen.width - burger7.width;
    
    bombW = screen.height - bomb.height;
    bombH = screen.width - bomb.width;
    
    document.getElementById("speed").innerHTML = "We're Starting Off Slow"
    document.getElementById("win").innerHTML = "You're Playing The Game";
    setInterval(moveIt, 1000)
    setInterval(moveBurger, 5000)
}

function moveIt() {
    bomb.style.top = Math.round(Math.random()*bombW) + "px"
    bomb.style.left = Math.round(Math.random()*bombH) + "px"

    asparagus.style.top = Math.round(Math.random()*asparagusW) + "px"
    asparagus.style.left = Math.round(Math.random()*asparagusH) + "px"
}

function moveBurger() {

    burger.style.top = Math.round(Math.random()*burgerW) + "px"
    burger.style.left = Math.round(Math.random()*burgerH) + "px"

    burger2.style.top = Math.round(Math.random()*burger2W) + "px"
    burger2.style.left = Math.round(Math.random()*burger2H) + "px"

    burger3.style.top = Math.round(Math.random()*burger3W) + "px"
    burger3.style.left = Math.round(Math.random()*burger3H) + "px"
    
    burger4.style.top = Math.round(Math.random()*burger4W) + "px"
    burger4.style.left = Math.round(Math.random()*burger4H) + "px"

    burger5.style.top = Math.round(Math.random()*burger5W) + "px"
    burger5.style.left = Math.round(Math.random()*burger5H) + "px"

    burger6.style.top = Math.round(Math.random()*burger6W) + "px"
    burger6.style.left = Math.round(Math.random()*burger6H) + "px"

    burger7.style.top = Math.round(Math.random()*burger7W) + "px"
    burger7.style.left = Math.round(Math.random()*burger7H) + "px"
}
var score = 0;
var highscore = localStorage.getItem("highscore");

if (highscore !== null) {
    if (score > highscore) {
        localStorage.setItem("highscore", score);
        document.getElementById("highscore").innerHTML = highscore
    }
}
else {
    localStorage.setItem("highscore", score);
    document.getElementById("highscore").innerHTML = highscore
}

function BackGround() {
    document.getElementById("Back").style.visibility = "visible";
    score = score - 1
    document.getElementById("score").innerHTML = score;
}

function hideBurger1() {
    document.getElementById("hamburger").style.visibility = "hidden";
    score = score + 1
    document.getElementById("score").innerHTML = score;
    if(score>= 21){
        document.getElementById("speed").innerHTML = "Now We're Faster"
        console.log("faster")
        setTimeout(() => {
            document.getElementById("hamburger").style.visibility = "visible";
        }, 3000);
    }
    if(score>= 60){
        document.getElementById("speed").innerHTML = "Now We're SUPER SPEED"
        setTimeout(() => {
            document.getElementById("hamburger").style.visibility = "visible";
        }, 2000);
    }
    setTimeout(() => {
        document.getElementById("hamburger").style.visibility = "visible";
    }, 5000);
}

function hideBurger2() {
    document.getElementById("hamburger2").style.visibility = "hidden";
    score = score + 1
    document.getElementById("score").innerHTML = score;
    if(score>= 21){
        document.getElementById("speed").innerHTML = "Now We're Faster"
        console.log("faster")
        setTimeout(() => {
            document.getElementById("hamburger2").style.visibility = "visible";
        }, 3000);
    }
    if(score>= 60){
        document.getElementById("speed").innerHTML = "Now We're SUPER SPEED"
        setTimeout(() => {
            document.getElementById("hamburger2").style.visibility = "visible";
        }, 2000);
    }
    setTimeout(() => {
        document.getElementById("hamburger2").style.visibility = "visible";
    }, 5000);
}

function hideBurger3() {
    document.getElementById("hamburger3").style.visibility = "hidden";
    score = score + 1
    document.getElementById("score").innerHTML = score;
    if(score>= 21){
        document.getElementById("speed").innerHTML = "Now We're Faster"
        console.log("faster")
        setTimeout(() => {
            document.getElementById("hamburger3").style.visibility = "visible";
        }, 3000);
    }
    if(score>= 60){
        document.getElementById("speed").innerHTML = "Now We're SUPER SPEED"
        setTimeout(() => {
            document.getElementById("hamburger3").style.visibility = "visible";
        }, 2000);
    }
    setTimeout(() => {
        document.getElementById("hamburger3").style.visibility = "visible";
    }, 5000);
}

function hideBurger4() {
    document.getElementById("hamburger4").style.visibility = "hidden";
    score = score + 1
    document.getElementById("score").innerHTML = score;
    if(score>= 21){
        document.getElementById("speed").innerHTML = "Now We're Faster"
        console.log("faster")
        setTimeout(() => {
            document.getElementById("hamburger4").style.visibility = "visible";
        }, 3000);
    }
    if(score>= 60){
        document.getElementById("speed").innerHTML = "Now We're SUPER SPEED"
        setTimeout(() => {
            document.getElementById("hamburger4").style.visibility = "visible";
        }, 2000);
    }
    setTimeout(() => {
        document.getElementById("hamburger4").style.visibility = "visible";
    }, 5000);
}

function hideBurger5() {
    document.getElementById("hamburger5").style.visibility = "hidden";
    score = score + 1
    document.getElementById("score").innerHTML = score;
    if(score>= 21){
        document.getElementById("speed").innerHTML = "Now We're Faster"
        console.log("faster")
        setTimeout(() => {
            document.getElementById("hamburger5").style.visibility = "visible";
        }, 3000);
    }
    if(score>= 60){
        document.getElementById("speed").innerHTML = "Now We're SUPER SPEED"
        setTimeout(() => {
            document.getElementById("hamburger5").style.visibility = "visible";
        }, 2000);
    }
    setTimeout(() => {
        document.getElementById("hamburger5").style.visibility = "visible";
    }, 5000);
}

function hideBurger6() {
    document.getElementById("hamburger6").style.visibility = "hidden";
    score = score + 1
    document.getElementById("score").innerHTML = score;
    if(score>= 21){
        document.getElementById("speed").innerHTML = "Now We're Faster"
        console.log("faster")
        setTimeout(() => {
            document.getElementById("hamburger6").style.visibility = "visible";
            
        }, 3000);
    }
    if(score>= 60){
        document.getElementById("speed").innerHTML = "Now We're SUPER SPEED"
        setTimeout(() => {
            document.getElementById("hamburger6").style.visibility = "visible";
        }, 2000);
    }
    setTimeout(() => {
        document.getElementById("hamburger6").style.visibility = "visible";
    }, 5000);
}

function hideBurger7() {
    document.getElementById("hamburger7").style.visibility = "hidden";
    score = score + 1
    document.getElementById("score").innerHTML = score;
    if(score>= 21){
        document.getElementById("speed").innerHTML = "Now We're Faster"
        console.log("faster")
        setTimeout(() => {
            document.getElementById("hamburger7").style.visibility = "visible";
        }, 3000);
    }
    if(score>= 60){
        document.getElementById("speed").innerHTML = "Now We're SUPER SPEED"
        setTimeout(() => {
            document.getElementById("hamburger7").style.visibility = "visible";
        }, 2000);
    }
    setTimeout(() => {
        document.getElementById("hamburger7").style.visibility = "visible";
    }, 5000);
}

var loss = "YOU LOST ):";

function lose() {
    document.getElementById("win").innerHTML = loss;
    console.log(loss)
    document.getElementById("hamburger").style.visibility = "hidden"
    document.getElementById("hamburger2").style.visibility = "hidden"
    document.getElementById("hamburger3").style.visibility = "hidden"
    document.getElementById("hamburger4").style.visibility = "hidden"
    document.getElementById("hamburger5").style.visibility = "hidden"
    document.getElementById("hamburger6").style.visibility = "hidden"
    document.getElementById("hamburger7").style.visibility = "hidden"
    document.getElementById("veggieBomb").style.visibility = "hidden"
    document.getElementById("asparagus").style.visibility = "hidden"

    setTimeout(() => {
        location.reload()
    }, 5000);
}