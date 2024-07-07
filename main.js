the_div = document.querySelector(".clock");

function currentTime() {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // Format the time components to always show two digits
  hours = String(hours).padStart(2,"0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

if(hours > 12){
  hours = hours - 12
}

  the_div.innerHTML = `${hours} : ${minutes} : ${seconds}`;

  setTimeout(function () {
    currentTime();
  }, 500);
}

currentTime();


