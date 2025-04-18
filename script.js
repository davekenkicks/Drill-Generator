const drillDisplay = document.getElementById('drill-display');
const generateDrillButton = document.getElementById('generate-drill');
const listDisplay = document.getElementById('list-display'); //the whole list
const clearList = document.getElementById('clear-list');


generateDrillButton.addEventListener('click', generateDrill);
clearList.addEventListener('click', removeList);

function generateDrill(){
  const randomIndex = Math.floor(Math.random() * drills.length);
  const randomDrill = drills[randomIndex];
  drillDisplay.innerText = randomDrill;

  const listItem = listDisplay.getElementsByTagName('li'); //do list checking first
  for(let i = 0; i < listItem.length; i++){
    if(listItem[i].innerText === randomDrill){
      listDisplay.removeChild(listItem[i]);
    };
  };

  const createList = document.createElement('li'); //Create a new list item
  createList.innerText = randomDrill; //Set the text content into the randomDrill
  listDisplay.appendChild(createList); //append it to the list.

};

function removeList(){
  listDisplay.innerHTML = '' //the list will just now be empty.
}




