let GameTicking;
let TickInterval;
let DisplayTicking;
let DisplayInterval = 50;
let FadeInDuration = 500;
let Theme = "light";
let LastThemeChange = 0;
let ThrottleDuration = 300;
//Time in ms

function GameTick() {
  points += 1
}

function DisplayTick() {
  if (points != 0) {
    document.getElementById("pointdisplay").innerHTML = "Points: " + points
  }
}

function OpenTab(id,fade = false,duration = FadeInDuration) {
  let tabs = document.getElementsByClassName("Tab") 
  let i2 = tabs.length
  for (let i = 0; i < i2; i++) {
    let tab = tabs[i]
    if (tab.id === id) {
      if (fade) {
        FadeInTabs(id,duration)
      } else {
        tab.style.display = "block"
      }
    } else {
      tab.style.display = "none"
    }
  }
}

function FadeInTabs(id,duration = FadeInDuration) {
  let tab = document.getElementById(id)
  tab.style.display = "block"
  tab.style.transitionDuration = duration + "ms"
  setTimeout(function() {
    tab.style.opacity = "1";
  }, duration)
}

function ToggleTheme() {
  const now = Date.now();
  if (now - LastThemeChange >= ThrottleDuration) {
    let color1; //Contrast
    let color2; //Similar
    if (Theme == "light") {
      Theme = "dark";
      color1 = "white";
      color2 = "black";
    } else {
      Theme = "light";
      color1 = "black";
      color2 = "white";
    }
    let containers = document.getElementsByClassName("Containers")
    let buttons = document.getElementsByClassName("Buttons")
    let text = document.getElementsByClassName("Text")
    let containertext = document.getElementsByClassName("ContainerText")
    const lengtharray = [containers.length,buttons.length,text.length,containertext.length]
    document.body.style.backgroundColor = color2;
    for (let i = 0; i < lengtharray[0]; i++) {
      let container = containers[i]
      container.style.color = color1;
      container.style.backgroundColor = color2;
      container.style.borderColor = color1;
    }
    for (let i = 0; i < lengtharray[1]; i++) {
      let button = buttons[i]
      button.style.color = color2;
      button.style.backgroundColor = color1;
      button.style.borderColor = color2;
    }
    for (let i = 0; i < lengtharray[2]; i++) {
      text[i].style.color = color1;
    }
    for (let i = 0; i < lengtharray[3]; i++) {
      containertext[i].style.color = color2;
    }
  LastThemeChange = now;
  }
}

function ToggleDisplayTick() {
  if (DisplayTicking) {
    clearInterval(DisplayTicking);
    DisplayTicking = undefined;
  } else {
    DisplayTicking = setInterval(DisplayTick, DisplayInterval);
  }
}

function ToggleGameTick() {
  if (TickInterval) {
    if (GameTicking) {
      clearInterval(GameTicking);
      GameTicking = undefined;
    } else {
      GameTicking = setInterval(GameTick, TickInterval);
    }
  }
}

function Load() {
  ToggleGameTick()
  ToggleDisplayTick()
}
