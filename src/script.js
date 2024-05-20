const res = document.getElementById("result");

function calculate(value) {
  const calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) {
    res.value = "Can't divide 0 with 0";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  } else {
    res.value = calculatedValue;
  }
}

// Swaps the css to achieve dark mode.
function changeTheme() {
    const lightThemeLink = document.getElementById("light-theme");
    const darkThemeLink = document.getElementById("dark-theme");
    const themeIcon = document.getElementById("theme-icon");
    const toast = document.getElementById("toast");
  
    if (lightThemeLink.disabled) {
      lightThemeLink.disabled = false;
      darkThemeLink.disabled = true;
      themeIcon.setAttribute("src", "assets/SunIcon.svg");
      toast.innerHTML = "Light Mode ☀️";
    } else {
      lightThemeLink.disabled = true;
      darkThemeLink.disabled = false;
      themeIcon.setAttribute("src", "assets/MoonIcon.svg");
      toast.innerHTML = "Dark Mode 🌙";
    }
  
    setTimeout(() => {
      toast.innerHTML = "RussCalculus";
    }, 1300);
  }
  

// Displays entered value on screen.
function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
  res.value += enteredValue;
}

// Adding event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

// Function to handle keyboard inputs
function keyboardInputHandler(e) {
  // To fix the default behavior of browser,
  // Enter and backspace were causing undesired behavior when some key was already in focus.
  e.preventDefault();
  // Grabbing the liveScreen

  // Numbers
  if ("0123456789".includes(e.key)) {
    res.value += e.key;
  }

  // Operators
  if ("+-*/".includes(e.key)) {
    res.value += e.key;
  }

  // Decimal key
  if (e.key === ".") {
    res.value += ".";
  }

  // Press enter to see result
  if (e.key === "Enter") {
    calculate(result.value);
  }

  // Backspace for removing the last input
  if (e.key === "Backspace") {
    const resultInput = res.value;
    // Remove the last element in the string
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}