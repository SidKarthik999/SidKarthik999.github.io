// Matthew Idea 
//the thingy you have to click will apear for a certain amount of time. if you click and you click not on the thingy then you lose points 
//x and y randomized every time you click it
//If you don't click the balloon in the amount of time you lose
//make a bomb thingy that if you click it u lose
// beat score thingy

var speed = "Slow"

function revealDirections() {

    document.getElementById("btn2").style.visibility = "hidden"
    document.getElementById("Directions").style.visibility = "visible"

}

function hideAll() {
    document.getElementById("Back2").style.visibility = "hidden"
    document.getElementById("veggieBomb").style.visibility = "hidden"
    document.getElementById("asparagus").style.visibility = "hidden"
    document.getElementById("veggieBomb2").style.visibility = "hidden"
    document.getElementById("asparagus2").style.visibility = "hidden"
    document.getElementById("veggieBomb3").style.visibility = "hidden"
    document.getElementById("asparagus3").style.visibility = "hidden"
    document.getElementById("hamburger").style.visibility = "hidden"
    document.getElementById("hamburger2").style.visibility = "hidden"
    document.getElementById("hamburger3").style.visibility = "hidden"
    document.getElementById("hamburger4").style.visibility = "hidden"
    document.getElementById("hamburger5").style.visibility = "hidden"
    document.getElementById("hamburger6").style.visibility = "hidden"
    document.getElementById("hamburger7").style.visibility = "hidden"
    document.getElementById("Directions").style.visibility = "hidden"
}

function Init() {
    document.getElementById("btn").style.visibility = "hidden"
    document.getElementById("win").style.visibility = "hidden"
    document.getElementById("btn2").style.visibility = "hidden"
    document.getElementById("Directions").style.visibility = "hidden"
    bomb = document.getElementById("veggieBomb");
    asparagus = document.getElementById("asparagus")
    bomb2 = document.getElementById("veggieBomb2");
    asparagus2 = document.getElementById("asparagus2")
    bomb3 = document.getElementById("veggieBomb3");
    asparagus3 = document.getElementById("asparagus3")
    burger = document.getElementById("hamburger")
    burger2 = document.getElementById("hamburger2")
    burger3 = document.getElementById("hamburger3")
    burger4 = document.getElementById("hamburger4")
    burger5 = document.getElementById("hamburger5")
    burger6 = document.getElementById("hamburger6")
    burger7 = document.getElementById("hamburger7")

    document.getElementById("veggieBomb").style.visibility = "visible"
    document.getElementById("asparagus").style.visibility = "visible"
    document.getElementById("veggieBomb2").style.visibility = "visible"
    document.getElementById("asparagus2").style.visibility = "visible"
    document.getElementById("veggieBomb3").style.visibility = "visible"
    document.getElementById("asparagus3").style.visibility = "visible"
    document.getElementById("hamburger").style.visibility = "visible"
    document.getElementById("hamburger2").style.visibility = "visible"
    document.getElementById("hamburger3").style.visibility = "visible"
    document.getElementById("hamburger4").style.visibility = "visible"
    document.getElementById("hamburger5").style.visibility = "visible"
    document.getElementById("hamburger6").style.visibility = "visible"
    document.getElementById("hamburger7").style.visibility = "visible"

    asparagusW = screen.height - asparagus.height;
    asparagusH = screen.width - asparagus.width;

    asparagus2W = screen.height - asparagus2.height;
    asparagus2H = screen.width - asparagus2.width;

    asparagus3W = screen.height - asparagus3.height;
    asparagus3H = screen.width - asparagus3.width;


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

    bomb2W = screen.height - bomb2.height;
    bomb2H = screen.width - bomb2.width;
    
    bomb3W = screen.height - bomb3.height;
    bomb3H = screen.width - bomb3.width;

    document.getElementById("speed").innerHTML = "We're Starting Off Slow"
    document.getElementById("win").innerHTML = "You're Playing The Game";
    
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
    
    setInterval(moveIt, 1000)
    setInterval(moveBurger, 5000)
}

function moveIt() {
    bomb.style.top = Math.round(Math.random()*bombW) + "px"
    bomb.style.left = Math.round(Math.random()*bombH) + "px"

    asparagus.style.top = Math.round(Math.random()*asparagusW) + "px"
    asparagus.style.left = Math.round(Math.random()*asparagusH) + "px"

    bomb2.style.top = Math.round(Math.random()*bomb2W) + "px"
    bomb2.style.left = Math.round(Math.random()*bomb2H) + "px"

    asparagus2.style.top = Math.round(Math.random()*asparagus2W) + "px"
    asparagus2.style.left = Math.round(Math.random()*asparagus2H) + "px"

    bomb3.style.top = Math.round(Math.random()*bomb3W) + "px"
    bomb3.style.left = Math.round(Math.random()*bomb3H) + "px"

    asparagus3.style.top = Math.round(Math.random()*asparagus3W) + "px"
    asparagus3.style.left = Math.round(Math.random()*asparagus3H) + "px"
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
    document.getElementById("win").style.visibility = "visible"
    document.getElementById("Back2").style.visibility = "visible"
    document.getElementById("win").innerHTML = loss;
    document.getElementById("win").style.left = "42%";
    document.getElementById("win").style.top = "50%";
    document.getElementById("win").style.fontSize = "xx-large"
    document.getElementById("score").style.fontSize = "xx-large"
    document.getElementById("score").style.left = "42%"
    document.getElementById("score").style.top = "40%"
    document.getElementById("score").innerHTML = "You got " + score + " points"
    console.log(loss)
    document.getElementById("speed").style.visibility = "hidden"
    document.getElementById("hamburger").style.visibility = "hidden"
    document.getElementById("hamburger2").style.visibility = "hidden"
    document.getElementById("hamburger3").style.visibility = "hidden"
    document.getElementById("hamburger4").style.visibility = "hidden"
    document.getElementById("hamburger5").style.visibility = "hidden"
    document.getElementById("hamburger6").style.visibility = "hidden"
    document.getElementById("hamburger7").style.visibility = "hidden"
    document.getElementById("veggieBomb").style.visibility = "hidden"
    document.getElementById("asparagus").style.visibility = "hidden"
    document.getElementById("veggieBomb2").style.visibility = "hidden"
    document.getElementById("asparagus2").style.visibility = "hidden"
    document.getElementById("veggieBomb3").style.visibility = "hidden"
    document.getElementById("asparagus3").style.visibility = "hidden"
    setTimeout(() => {
        document.getElementById("hamburger").style.visibility = "hidden"
        document.getElementById("hamburger2").style.visibility = "hidden"
        document.getElementById("hamburger3").style.visibility = "hidden"
        document.getElementById("hamburger4").style.visibility = "hidden"
        document.getElementById("hamburger5").style.visibility = "hidden"
        document.getElementById("hamburger6").style.visibility = "hidden"
        document.getElementById("hamburger7").style.visibility = "hidden"
        document.getElementById("veggieBomb").style.visibility = "hidden"
        document.getElementById("asparagus").style.visibility = "hidden"
        document.getElementById("veggieBomb2").style.visibility = "hidden"
        document.getElementById("asparagus2").style.visibility = "hidden"
        document.getElementById("veggieBomb3").style.visibility = "hidden"
        document.getElementById("asparagus3").style.visibility = "hidden"
    }, 500);
    setTimeout(() => {
        document.getElementById("hamburger").style.visibility = "hidden"
        document.getElementById("hamburger2").style.visibility = "hidden"
        document.getElementById("hamburger3").style.visibility = "hidden"
        document.getElementById("hamburger4").style.visibility = "hidden"
        document.getElementById("hamburger5").style.visibility = "hidden"
        document.getElementById("hamburger6").style.visibility = "hidden"
        document.getElementById("hamburger7").style.visibility = "hidden"
        document.getElementById("veggieBomb").style.visibility = "hidden"
        document.getElementById("asparagus").style.visibility = "hidden"
        document.getElementById("veggieBomb2").style.visibility = "hidden"
        document.getElementById("asparagus2").style.visibility = "hidden"
        document.getElementById("veggieBomb3").style.visibility = "hidden"
        document.getElementById("asparagus3").style.visibility = "hidden"
    }, 500);
    setTimeout(() => {
        document.getElementById("hamburger").style.visibility = "hidden"
        document.getElementById("hamburger2").style.visibility = "hidden"
        document.getElementById("hamburger3").style.visibility = "hidden"
        document.getElementById("hamburger4").style.visibility = "hidden"
        document.getElementById("hamburger5").style.visibility = "hidden"
        document.getElementById("hamburger6").style.visibility = "hidden"
        document.getElementById("hamburger7").style.visibility = "hidden"
        document.getElementById("veggieBomb").style.visibility = "hidden"
        document.getElementById("asparagus").style.visibility = "hidden"
        document.getElementById("veggieBomb2").style.visibility = "hidden"
        document.getElementById("asparagus2").style.visibility = "hidden"
        document.getElementById("veggieBomb3").style.visibility = "hidden"
        document.getElementById("asparagus3").style.visibility = "hidden"
    }, 500);
    setTimeout(() => {
        document.getElementById("hamburger").style.visibility = "hidden"
        document.getElementById("hamburger2").style.visibility = "hidden"
        document.getElementById("hamburger3").style.visibility = "hidden"
        document.getElementById("hamburger4").style.visibility = "hidden"
        document.getElementById("hamburger5").style.visibility = "hidden"
        document.getElementById("hamburger6").style.visibility = "hidden"
        document.getElementById("hamburger7").style.visibility = "hidden"
        document.getElementById("veggieBomb").style.visibility = "hidden"
        document.getElementById("asparagus").style.visibility = "hidden"
        document.getElementById("veggieBomb2").style.visibility = "hidden"
        document.getElementById("asparagus2").style.visibility = "hidden"
        document.getElementById("veggieBomb3").style.visibility = "hidden"
        document.getElementById("asparagus3").style.visibility = "hidden"
    }, 500);
    setTimeout(() => {
        document.getElementById("hamburger").style.visibility = "hidden"
        document.getElementById("hamburger2").style.visibility = "hidden"
        document.getElementById("hamburger3").style.visibility = "hidden"
        document.getElementById("hamburger4").style.visibility = "hidden"
        document.getElementById("hamburger5").style.visibility = "hidden"
        document.getElementById("hamburger6").style.visibility = "hidden"
        document.getElementById("hamburger7").style.visibility = "hidden"
        document.getElementById("veggieBomb").style.visibility = "hidden"
        document.getElementById("asparagus").style.visibility = "hidden"
        document.getElementById("veggieBomb2").style.visibility = "hidden"
        document.getElementById("asparagus2").style.visibility = "hidden"
        document.getElementById("veggieBomb3").style.visibility = "hidden"
        document.getElementById("asparagus3").style.visibility = "hidden"
    }, 500);
    setTimeout(() => {
        document.getElementById("hamburger").style.visibility = "hidden"
        document.getElementById("hamburger2").style.visibility = "hidden"
        document.getElementById("hamburger3").style.visibility = "hidden"
        document.getElementById("hamburger4").style.visibility = "hidden"
        document.getElementById("hamburger5").style.visibility = "hidden"
        document.getElementById("hamburger6").style.visibility = "hidden"
        document.getElementById("hamburger7").style.visibility = "hidden"
        document.getElementById("veggieBomb").style.visibility = "hidden"
        document.getElementById("asparagus").style.visibility = "hidden"
        document.getElementById("veggieBomb2").style.visibility = "hidden"
        document.getElementById("asparagus2").style.visibility = "hidden"
        document.getElementById("veggieBomb3").style.visibility = "hidden"
        document.getElementById("asparagus3").style.visibility = "hidden"
    }, 500);
    setTimeout(() => {
        document.getElementById("hamburger").style.visibility = "hidden"
        document.getElementById("hamburger2").style.visibility = "hidden"
        document.getElementById("hamburger3").style.visibility = "hidden"
        document.getElementById("hamburger4").style.visibility = "hidden"
        document.getElementById("hamburger5").style.visibility = "hidden"
        document.getElementById("hamburger6").style.visibility = "hidden"
        document.getElementById("hamburger7").style.visibility = "hidden"
        document.getElementById("veggieBomb").style.visibility = "hidden"
        document.getElementById("asparagus").style.visibility = "hidden"
        document.getElementById("veggieBomb2").style.visibility = "hidden"
        document.getElementById("asparagus2").style.visibility = "hidden"
        document.getElementById("veggieBomb3").style.visibility = "hidden"
        document.getElementById("asparagus3").style.visibility = "hidden"
    }, 500);
    setTimeout(() => {
        document.getElementById("hamburger").style.visibility = "hidden"
        document.getElementById("hamburger2").style.visibility = "hidden"
        document.getElementById("hamburger3").style.visibility = "hidden"
        document.getElementById("hamburger4").style.visibility = "hidden"
        document.getElementById("hamburger5").style.visibility = "hidden"
        document.getElementById("hamburger6").style.visibility = "hidden"
        document.getElementById("hamburger7").style.visibility = "hidden"
        document.getElementById("veggieBomb").style.visibility = "hidden"
        document.getElementById("asparagus").style.visibility = "hidden"
        document.getElementById("veggieBomb2").style.visibility = "hidden"
        document.getElementById("asparagus2").style.visibility = "hidden"
        document.getElementById("veggieBomb3").style.visibility = "hidden"
        document.getElementById("asparagus3").style.visibility = "hidden"
    }, 500);
    setTimeout(() => {
        document.getElementById("hamburger").style.visibility = "hidden"
        document.getElementById("hamburger2").style.visibility = "hidden"
        document.getElementById("hamburger3").style.visibility = "hidden"
        document.getElementById("hamburger4").style.visibility = "hidden"
        document.getElementById("hamburger5").style.visibility = "hidden"
        document.getElementById("hamburger6").style.visibility = "hidden"
        document.getElementById("hamburger7").style.visibility = "hidden"
        document.getElementById("veggieBomb").style.visibility = "hidden"
        document.getElementById("asparagus").style.visibility = "hidden"
        document.getElementById("veggieBomb2").style.visibility = "hidden"
        document.getElementById("asparagus2").style.visibility = "hidden"
        document.getElementById("veggieBomb3").style.visibility = "hidden"
        document.getElementById("asparagus3").style.visibility = "hidden"
    }, 500);
    setTimeout(() => {
        location.reload()
    }, 3000);
}
