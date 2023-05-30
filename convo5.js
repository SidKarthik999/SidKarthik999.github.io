let index=0;

function TextReplace() {
    let phrases = ["Is this solitary confinement?", "Yes, now leave.", "Why is there blood all over the walls?", "Because I put it there.", " They put me in here because I was hurting myself.", "And they didn't try to help you?", "No... now LEAVE.", "You have now collected all five keys.", "Congratulations you may now leave, the prison."]
    const changeText = document.querySelector("#PrisonGuardIntro");
    changeText.textContent = phrases[index];
    if(index==0 || index==2){
        document.getElementById("PrisonGuardIntro").style.color = "#ed5615";
    }else if(index==1 || index==3 || index==4){
        document.getElementById("PrisonGuardIntro").style.color = "blue";
    }
    else{
        document.getElementById("PrisonGuardIntro").style.color = "green";
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
        window.location.href = "key5.html";
    }

}