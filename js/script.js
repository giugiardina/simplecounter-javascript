const counter = document.getElementById("counter");
const incr = document.querySelector(".incr");
const decr = document.querySelector(".decr");
const resetCounter = document.querySelector(".reset");

let count = 0;
incr.addEventListener("click", () => {
  count++;
  counter.innerHTML = count;
  counterStyle();
});

decr.addEventListener("click", () => {
  count--;
  counter.innerHTML = count;
  counterStyle();
});

resetCounter.addEventListener("click", () => {
	count = 0;
	document.getElementById("counter").innerHTML = count;
});

function counterStyle () {
  if (count <0){
    counter.classList.add("negative");
  }

  else if (count > 0){
    counter.classList.add("positive");
  }

  else {
    counter.classList.remove("negative");
    counter.classList.remove("positive");
  }
}
