const showPin = document.getElementById("show-pin");
const keyBody = document.getElementById("key-body");
const success = document.getElementById("success");
const wrong = document.getElementById("wrong");
let left = document.getElementById("left");
const notify = document.getElementById("notify");
let leftValue = parseInt(left.innerText);

function pinGenerator() {
  const pinGenerate = Math.floor(Math.random() * 9000) + 1000;

  return pinGenerate;
}

  document.getElementById("pin-generate").addEventListener("click", () => {
    showPin.value = pinGenerator();
  });


keyBody.addEventListener("click", (event) => {
  const currentTarget = event.target.innerText;
  const setPin = document.getElementById("set-pin");
  if (isNaN(currentTarget)) {
    if (currentTarget === "C") {
      setPin.value = " ";
    } else if (currentTarget === "<") {
      const value = setPin.value;
      if (value.length > 0) {
        const removeLast = value.slice(0, -1);
        setPin.value = removeLast;
      }
    }
  } else {
    const previousNum = setPin.value;
    const currentNum = previousNum + currentTarget;
    setPin.value = currentNum;
  }
});
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", () => {
  verrifyPin();
  console.log(leftValue);
});
function verrifyPin() {
  const getInputNumber = document.getElementById("set-pin");
  const inputValue = getInputNumber.value;

  if (parseInt(inputValue) ===parseInt (showPin.value)) {
    notify.style.display = "block";
    wrong.style.display = "none";
      success.style.display = "block";
      showPin.value = ' ';

  } else {
    notify.style.display = "block";
    wrong.style.display = "block";
    success.style.display = "none";
    if (leftValue > 0) {
      leftValue = leftValue - 1;
      left.innerText = leftValue;
    } else {
      submitButton.disabled = true;

      setTimeout(() => {
        submitButton.disabled = false;
        left.innerText = 3;
        leftValue = left.innerText;
      }, 3000);
    }
  }
  getInputNumber.value = " ";
}
