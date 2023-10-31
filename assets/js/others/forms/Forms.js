var currentForm = 1;
var totalForms = 7;

function showForm(formNumber) {
  for (var i = 1; i <= totalForms; i++) {
    document.getElementById("form" + i).style.display = "none";
  }
  document.getElementById("form" + formNumber).style.display = "block";
  document.getElementById("leftArrow").style.display =
    formNumber === 1 ? "none" : "block";
  document.getElementById("rightArrow").style.display =
    formNumber === totalForms ? "none" : "block";
}

function nextForm() {
  if (currentForm < totalForms) {
    currentForm++;
    showForm(currentForm);
  }
}

function previousForm() {
  if (currentForm > 1) {
    currentForm--;
    showForm(currentForm);
  }
}

window.onload = function () {
  showForm(currentForm);
};

function handleKeyDown(event) {
  if (event.key === "ArrowLeft") {
    previousForm();
  } else if (event.key === "ArrowRight") {
    nextForm();
  }
}

window.onload = function () {
  showForm(currentForm);
  document.addEventListener("keydown", handleKeyDown);
};
