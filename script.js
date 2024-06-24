let displayBox = document.getElementById("DisplayBox");
let buttons = document.querySelectorAll('button');
let string = ""; 

Array.from(buttons).forEach(button => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === '=') {
      try {
        string = eval(string);
        displayBox.innerText = string;
      } catch (error) {
        displayBox.innerText = "Error";
      }
    } else if (e.target.innerHTML === "AC") {
      string = "";
      displayBox.innerText = string;
    } else if (e.target.innerHTML === "DEL") {
      string = string.slice(0, -1);
      displayBox.innerText = string;
    } else {
      string += e.target.innerHTML;
      displayBox.innerText = string;
    }
  });
});