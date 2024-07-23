/// Roman Number Convert

// variables assigned to access elements in HTML document

const convertBtn = document.getElementById("convert-btn"); // set the "Convert" buttom
const numberInput = document.getElementById("number"); // set the "input"
const output = document.getElementById("output"); // set the "output"

// Functions

const checkUserInput = () => {};

// Event Listeners

// event listener to call the checkUserInput function when users click the Convert button.
convertBtn.addEventListener("click", checkUserInput);

// event listener to call the checkUserInput function when users press the Enter / Return key.
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
