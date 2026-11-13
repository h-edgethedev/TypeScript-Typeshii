"use strict";
const resultCard = document.getElementById("result-card");
const resultText = document.getElementById("result-text");
const circleGroup = document.getElementById("circle-props");
const radiusInput = document.getElementById("radius");
resultCard.classList.add("visible");
circleGroup.classList.remove("hidden");
resultText.textContent = "Enter a radius to see the area";
radiusInput.addEventListener("input", () => {
    const radius = Number(radiusInput.value) || 0;
    const area = Math.PI * radius ** 2;
    resultText.textContent = `Area of the Circle: ${area.toFixed(2)}`;
    console.log(Math.PI);
});
