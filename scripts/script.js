function identifyPage(){
    let pageTitle = document.querySelector("head > title");
    let titleString = pageTitle.textContent;
    let titleIsQualifying = titleString.includes("Qualifying");
    let titleIsHighlights = titleString.includes("Highlights");
}
function getTimeStamp(){
    let timeLabel = document.querySelector("#bmpui-id-57");
    let timeString = timeLabel.textContent;
    console.log(timeString)
};
function clickPlay(){
    let playStatusLabel = document.querySelector("#bmpui-id-67");
    playStatusLabel.click();
}
function clickForward(timeDifference){
    let tenSecForward = document.querySelector("#bmpui-id-2");
    tenSecForward.click();

    let playStatusLabel = document.querySelector("#bmpui-id-67");
    let playStatus = playStatusLabel.ariaLabel;
    // Pauses the Video if Playing
    if(playStatus === "Pause"){
        setTimeout(function() {
            clickPlay();
          }, 5000);
    }
};
function clickBackward(){}