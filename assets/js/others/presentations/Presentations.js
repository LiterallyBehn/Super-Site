var currentPresentation = 1;
var totalPresentations = 7;

function showPresentation(presentationNumber) {
  for (var i = 1; i <= totalPresentations; i++) {
    document.getElementById("presentation" + i).style.display = "none";
  }
  document.getElementById("presentation" + presentationNumber).style.display =
    "block";
  document.getElementById("leftArrow").style.display =
    presentationNumber === 1 ? "none" : "block";
  document.getElementById("rightArrow").style.display =
    presentationNumber === totalPresentations ? "none" : "block";
}

function nextPresentation() {
  if (currentPresentation < totalPresentations) {
    currentPresentation++;
    showPresentation(currentPresentation);
  }
}

function previousPresentation() {
  if (currentPresentation > 1) {
    currentPresentation--;
    showPresentation(currentPresentation);
  }
}

function handleKeyDown(event) {
  if (event.key === "ArrowLeft") {
    previousPresentation();
  } else if (event.key === "ArrowRight") {
    nextPresentation();
  }
}

window.onload = function () {
  showPresentation(currentPresentation);
  document.addEventListener("keydown", handleKeyDown);
};
