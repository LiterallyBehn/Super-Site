var currentJavaScript = 1;
var totalJavaScripts = 3;

function showJavaScript(javaScriptNumber) {
  for (var i = 1; i <= totalJavaScripts; i++) {
    document.getElementById("JavaScript" + i).style.display = "none";
  }
  document.getElementById("JavaScript" + javaScriptNumber).style.display =
    "block";
  document.getElementById("leftArrow").style.display =
    javaScriptNumber === 1 ? "none" : "block";
  document.getElementById("rightArrow").style.display =
    javaScriptNumber === totalJavaScripts ? "none" : "block";
}

function nextJavaScript() {
  if (currentJavaScript < totalJavaScripts) {
    currentJavaScript++;
    showJavaScript(currentJavaScript);
  }
}

function previousJavaScript() {
  if (currentJavaScript > 1) {
    currentJavaScript--;
    showJavaScript(currentJavaScript);
  }
}

function handleKeyDown(event) {
  if (event.key === "ArrowLeft") {
    previousJavaScript();
  } else if (event.key === "ArrowRight") {
    nextJavaScript();
  }
}

window.onload = function () {
  showJavaScript(currentJavaScript);
  document.addEventListener("keydown", handleKeyDown);
};
