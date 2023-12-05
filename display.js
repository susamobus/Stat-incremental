let DisplayTicking;
let DisplayInterval = 50;
let Theme = "light";

function DisplayTick() {
  if (points != 0) {
    document.getElementById("pointdisplay").innerHTML = "Points: " + points
  }
}

function ToggleTheme() {
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
  for (let i = 0; i < lengtharray[0]; i++) {
    let container = containers[i]
    container.style.color = color2;
    container.style.backgroundColor = color1;
    container.style.borderColor = color2
  }
  for (let i = 0; i < lengtharray[1]; i++) {
    let button = buttons[i]
    button.style.color = color1;
    button.style.backgroundColor = color2;
    button.style.borderColor = color1;
  }
  for (let i = 0; i < lengtharray[2]; i++) {
    text[i].style.color = color1;
  }
  for (let i = 0; i < lengtharray[3]; i++) {
    containertext[i].style.color = color2;
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

function Load() {
  ToggleDisplayTick()
}
