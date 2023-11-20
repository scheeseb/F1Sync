function identifyPage() {
    const pageTitle = document.querySelector("head > title");
    let titleString = pageTitle.textContent;
    let titleIsQualifying = titleString.includes("Qualifying");
    let titleIsHighlights = titleString.includes("Highlights");
}


function getTimeStamp() {
    const timeLabel = document.querySelector("#bmpui-id-57");
    let timeString = timeLabel.textContent;
    console.log(timeString)
};


function clickPlay() {
    const playStatusLabel = document.querySelector("#bmpui-id-67");
    playStatusLabel.click();
}


function clickForward(timeDifference) {
    const tenSecForward = document.querySelector("#bmpui-id-2");
    tenSecForward.click();

    const playStatusLabel = document.querySelector("#bmpui-id-67");
    let playStatus = playStatusLabel.ariaLabel;
    // Pauses the Video if Playing
    if (playStatus === "Pause") {
        setTimeout(function () {
            clickPlay();
        }, 0);
    }
};


function clickBackward() {
    const tenSecBackward = document.querySelector("#bmpui-id-1")
    tenSecBackward.click();
}