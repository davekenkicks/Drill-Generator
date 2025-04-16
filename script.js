const drillDisplay = document.getElementById('drill-display');
const generateDrillButton = document.getElementById('generate-drill');
const listDisplay = document.getElementById('list-display'); //Select the list



generateDrillButton.addEventListener('click', generateDrill);

function generateDrill(){
  const randomIndex = Math.floor(Math.random() * drills.length);
  randomDrill = drills[randomIndex];
  drillDisplay.innerText = randomDrill;

  const createList = document.createElement('li'); //Create a new list item
  createList.innerText = randomDrill; //Set the text content into the randomDrill
  listDisplay.appendChild(createList); //append it to the list. 

};




