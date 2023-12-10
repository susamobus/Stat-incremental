let points = 0
let PointInterval;

function GainPoints() {
  if (points == 0) {
    FadeInTabs("maindisplay")
  }
  points += 1
}

function PointUpgrade(index) {
  if (index==1) {
    if (points>=5) {
      points -= 5;
      PointInterval = 200;
    }
  }
}
