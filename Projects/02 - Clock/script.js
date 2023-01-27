function setDate() {
  const hourHand = document.querySelector(".hour-hand");
  const minuteHand = document.querySelector(".min-hand");
  const secondHand = document.querySelector(".second-hand");
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds() == 0 ? 60 : currentTime.getSeconds();
  const hourDegree = (hours / 12) * 360 + 90;
  const minuteDegree = (minutes / 60) * 360 + 90;
  const secondDegree = seconds == 60 ? 90 : (seconds / 60) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  console.log(seconds, secondDegree);
}

setInterval(setDate, 1000);
