const counter = document.getElementById("counter");
const incr = document.querySelector(".incr");
const decr = document.querySelector(".decr");

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
