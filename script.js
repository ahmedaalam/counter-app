let num = document.getElementById("number");
let btn1 = document.getElementById("decrement");
let btn2 = document.getElementById("increment");
let btn3 = document.getElementById("reset");

let count = 0;

function updateUI() {
  num.textContent = count;
  btn1.disabled = count === 0;
}

btn1.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateUI();
  }
  
});

btn2.addEventListener("click", () => {
  count++;
  updateUI();
});

btn3.addEventListener("click", () => {
  count = 0;
  updateUI();
});
