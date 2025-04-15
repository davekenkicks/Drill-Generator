const drillDisplay = document.getElementById('drill-display');
const generateDrillButton = document.getElementById('generate-drill');

generateDrillButton.addEventListener('click', generateDrill);

function generateDrill(){
  const randomIndex = Math.floor(Math.random()*drills.length);
  drillDisplay.innerText = drills[randomIndex];
};

