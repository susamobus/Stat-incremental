let points = 0

function RevealMainDisplay() {
  let maindisp = document.getElementById("maindisplay")
  maindisp.style.display = "block"
  maindisp.style.transitionDuration = FadeInDuration + "s"
  setTimeout(function() {
    maindisp.style.opacity = "1";
  }, FadeInDuration * 1000);
}

function GainPoints() {
  if (points == 0) {
    RevealMainDisplay()
  }
  points += 1
}


