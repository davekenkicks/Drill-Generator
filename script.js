const drills = [
    "Jab - Cross - Hook",
    "Lead Teep - Rear Round Kick",
    "Check - Return Low Kick",
    "Cross - Hook - Rear Kick",
    "Jab - Cross - Switch Kick",
    "Jab - Rear Elbow - Lead Knee",
    "Feint Jab - Rear Roundhouse"
  ];
  
  function generateDrill() {
    const randomIndex = Math.floor(Math.random() * drills.length);
    document.getElementById('drill-display').innerText = drills[randomIndex];
  }
  