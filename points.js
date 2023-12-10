let points = 0;
let pointupgrades = [false];
let pointupgradecosts = [5];

function GainPoints() {
  if (points == 0) {
    FadeInTabs("maindisplay")
  }
  if (points == 4) {
    FadeInTabs("pointupgrade0")
  }
  points += 1
}

function PointUpgrade(index) {
  if (index==0) {
    if (points>=pointupgradecosts[index]&&!pointupgrades[index]) {
      points -= pointupgradecosts[index];
      pointupgrades[index] = true;
      TickInterval = 200;
      ToggleGameTick();
    }
  }
}
