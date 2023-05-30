let index=0;

function TextReplace() {
    let phrases = ["Why am I in here?", "Jaywalking...", "What am I meant to do here?", "Don't know don't care. Most of us hate this job. ", "My job has suicide rates 39% higher than others.", "This interaction granted you a key.", "Your goal is to get 5 of these.", "Once you do you can escape.", "Good Luck."]
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
        window.location.href = "key1.html";
    }

}