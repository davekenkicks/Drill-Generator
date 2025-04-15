function generateDrill() {
  const randomIndex = Math.floor(Math.random() * drills.length);
  document.getElementById('drill-display').innerText = drills[randomIndex];
} //study functions, get element by ID, methods, math.random
