document
  .getElementById("life-stage-calculator")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const age = parseFloat(document.getElementById("age").value);
    let lifeStage = "";
    let lifeStageImage = "";

    if (age < -0.9 || age > 120) {
      lifeStage = "Edad no válida";
      lifeStageImage = "invalid_age.jpg";
    } else if (age >= -0.9 && age < 1) {
      lifeStage = "Feto";
      lifeStageImage = "fetus.png";
    } else if (age >= 1 && age <= 11) {
      lifeStage = "Niñez";
      lifeStageImage = "childhood.png";
    } else if (age >= 12 && age <= 21) {
      lifeStage = "Adolescencia";
      lifeStageImage = "adolescence.png";
    } else if (age >= 22 && age <= 35) {
      lifeStage = "Juventud";
      lifeStageImage = "youth.png";
    } else if (age >= 36 && age <= 56) {
      lifeStage = "Madurez";
      lifeStageImage = "maturity.png";
    } else {
      lifeStage = "Vejez";
      lifeStageImage = "old_age.png";
    }

    document.getElementById("result").innerHTML = `Etapa de vida: ${lifeStage}`;

    document.getElementById(
      "life-stage-image"
    ).src = `images/${lifeStageImage}`;

    const imageElement = document.getElementById("life-stage-image");
    imageElement.src = `assets/media/img/png/${lifeStageImage}`;
    imageElement.alt = `Imagen de ${lifeStage}`;
  });
