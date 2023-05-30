let index=0;

function TextReplace() {
    let phrases = ["I think so...", "Well don't expect anything good from it", "The beds are horrible", "Do I get to get any stuff?", "Not really...", "Look around we barely have any space", "They treat us as though we are less than humans", "We don't deserve any sort of comfort", "Oh..."]
    const changeText = document.querySelector("#PrisonGuardIntro");
    changeText.textContent = phrases[index];
    if(index==0 || index==3 || index==8){
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
        window.location.href = "key4.html";
    }

}