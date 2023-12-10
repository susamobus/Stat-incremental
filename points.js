let points = 0

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
    if (points>=5) {
      points -= 5;
      TickInterval = 200;
      ToggleGameTick()
    }
  }
}
