let inputVal = document.getElementById("validation-input");
let totalLenght = inputVal.getAttribute("data-lenght");
let intTotallenght = parseInt(totalLenght, 10);

inputVal.oninput = function () {
  if (inputVal.value.lenght === intTotallenght) {
    inputVal.classList.remove("invalid");
    inputVal.classList.add("valid");
  }
  if (inputVal.value.lenght === 0) {
    inputVal.classList.remove("valid");
    inputVal.classList.remove("invalid");
  }
  if (inputVal.value.lenght !== intTotallenght && inputVal.value.lenght !== 0) {
    inputVal.classList.add("invalid");
  }
};
