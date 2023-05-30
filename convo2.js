let index=0;

function TextReplace() {
    let phrases = ["I'm George, I just got here.", "Then you have much to learn.", "What do you mean?", "My existence here is miserable.", "Expect yours to be the same.", "We are largely treated badly.", "Why?", "Because we commited a crime.", "Society doesn't want us anymore."]
    const changeText = document.querySelector("#PrisonGuardIntro");
    changeText.textContent = phrases[index];
    if(index==0 || index==2 || index==6){
        document.getElementById("PrisonGuardIntro").style.color = "#ed5615";
    }else{
        document.getElementById("PrisonGuardIntro").style.color = "blue";
    }
    
    index++;
    element = document.getElementById("PrisonGuardIntro");
    element.classList.remove("run-animation");
    // element.offsetWidth = element.offsetWidth;
    void element.offsetWidth;  
    element.classList.add("run-animation");
}

function back() {

    if(index<8) {
        alert("You have not completed this interaction. Please wait for the interaction to finish")
    } else{
        window.location.href = "key2.html";
    }

}