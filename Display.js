let DisplayTicking;
let DisplayInterval = 50;

function DisplayTick() {
  document.getElementById("pointdisplay").innerHTML = "Points: " + points
}

function ToggleDisplayTick() {
  if (DisplayTicking) {
    clearInterval(DisplayTicking);
    DisplayTicking = undefined;
  } else {
    DisplayTicking = setInterval(DisplayTick, DisplayInterval);
  }
}

function Load() {
  ToggleDisplayTick()
}
