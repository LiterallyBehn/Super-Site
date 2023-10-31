var currentTable = 1;
var totalTables = 4;

function showTable(tableNumber) {
  for (var i = 1; i <= totalTables; i++) {
    document.getElementById("table" + i).style.display = "none";
  }
  document.getElementById("table" + tableNumber).style.display = "block";
  document.getElementById("leftArrow").style.display =
    tableNumber === 1 ? "none" : "block";
  document.getElementById("rightArrow").style.display =
    tableNumber === totalTables ? "none" : "block";
}

function nextTable() {
  if (currentTable < totalTables) {
    currentTable++;
    showTable(currentTable);
  }
}

function previousTable() {
  if (currentTable > 1) {
    currentTable--;
    showTable(currentTable);
  }
}

function handleKeyDown(event) {
  if (event.key === "ArrowLeft") {
    previousTable();
  } else if (event.key === "ArrowRight") {
    nextTable();
  }
}

window.onload = function () {
  showTable(currentTable);
  document.addEventListener("keydown", handleKeyDown);
};
