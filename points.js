let points = 0;
let pointupgrades = [false];

function GainPoints() {
  if (points == 0) {
    FadeInTabs("maindisplay")
  }
  if (points == 5) {
    FadeInTabs("pointupgrade0")
  }
  points += 1
}

function PointUpgrade(index) {
  if (index==0) {
    if (points>=5&&!pointupgrades[0]) {
      points -= 5;
      pointupgrades[0] = true;
      TickInterval = 200;
      ToggleGameTick();
    }
  }
}
