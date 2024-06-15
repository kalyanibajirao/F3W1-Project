document.addEventListener("DOMContentLoaded", () => {
  const countElement = document.getElementById("count");
  const errorElement = document.getElementById("error");
  let count = 0;

  document.getElementById("decrement").addEventListener("click", () => {
    if (count > 0) {
      count--;
      errorElement.textContent = "";
    } else {
      errorElement.textContent = "Error : Cannot go below 0";
    }
    countElement.textContent = count;
  });

  document.getElementById("increment").addEventListener("click", () => {
    count++;
    errorElement.textContent = "";
    countElement.textContent = count;
  });

  document.getElementById("clear").addEventListener("click", () => {
    count = 0;
    errorElement.textContent = "";
    countElement.textContent = count;
  });
});
