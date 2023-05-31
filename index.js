const control = document.querySelector('.form-control');
const james = document.querySelector('.james');
const take = document.querySelector('.take');
const text = document.querySelector('#textarea');

const action = () => {
  if (!control.value.includes('@') || !control.value.includes('.com')) {
    james.style.display = "block";
    james.textContent = "Valid email required";
    james.style.color = "red";
    control.classList.add("red");
    control.classList.remove("green");
    text.style.backgroundColor = "red";
    text.style.borderColor = "red";
    setTimeout(() => {
      james.textContent = "";
      text.style.backgroundColor = "";
      text.style.borderColor = "";
    }, 3000);
  } else {
    james.textContent = "Success";
    james.style.color = "green";
    control.classList.add("green");
    control.classList.remove("red");
    text.style.backgroundColor = "";
    text.style.borderColor = "";
    setTimeout(() => {
      james.textContent = "";
    }, 3000);
  }
};

take.addEventListener('click', action);