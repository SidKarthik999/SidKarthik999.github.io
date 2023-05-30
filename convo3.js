let index=0;

function TextReplace() {
    let phrases = ["Life in here is ruthless so you better watch out.", "What do you mean?", "I mean stabbings and sexual assault.", "I mean daily beat downs.", "Don't the guards care?", "No, and if you were hoping for mental help.", "Forget about it.", "They don't care about your health.", "Only that you follow their rules."]
    const changeText = document.querySelector("#PrisonGuardIntro");
    changeText.textContent = phrases[index];
    if(index==1 || index==4){
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
        window.location.href = "key3.html";
    }

}