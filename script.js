function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function changeFontColor() {
  // Get the element by its ID
  var textElement = document.getElementById("textToChange");

  // Generate a random color (you can replace this with any color logic)
  var randomColor = getRandomColor();

  // Update the text color
  textElement.style.color = randomColor;
}

function getRandomColor() {
  // Generates a random hex color
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}