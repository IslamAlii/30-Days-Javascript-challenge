const details = navigator.userAgent;
const regexp = /android|iphone|kindle|ipad/i;
const isMobileDevice = regexp.test(details);
const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");
navigator.geolocation.watchPosition(
  (data) => {
    console.log(data);
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  (err) => {
    console.error(err);
  }
);
// if (isMobileDevice) {
//   navigator.geolocation.watchPosition(
//     (data) => {
//       console.log(data);
//       speed.textContent = data.coords.speed;
//       arrow.style.transform = `rotate(${data.coords.heading}deg)`;
//     },
//     (err) => {
//       console.error(err);
//     }
//   );
// } else {
//   document.querySelector("main").style.display = "none";
//   document.querySelector(".notMobileApplication").style.display = "block";
// }
