const projectsBox = document.querySelector("main .container");
const projectsList = [
  "Drum Kit",
  "Clock",
  "Updating CSS Variables by JS",
  "Array Cardio Day 1",
  "Flex Panel Gallery",
  "Type Ahead",
  "Array Cardio Day 2",
  "Fun with HTML5 Canvas",
  "Modal",
  "Hold Shift and Check Checkboxes",
  "Custom Video Player",
  "Simple Todo list",
  "Slide in on Scroll",
  "Accordion",
  "LocalStorage",
  "Mouse Move Shadow",
  "Sort Without Articles",
  "Adding Up Times with Reduce",
  "Webcam Fun",
  "Speech Detection",
  "Geolocation",
  "Follow Along Link Highlighter",
  "Speech Synthesis",
  "Sticky Nav",
  "Calculate textarea characters",
  "Stripe Follow Along Nav",
  "Click and Drag",
  "Video Speed Controller",
  "Countdown Timer",
  "Whack A Mole",
];

projectsBox.innerHTML = `${projectsList
  .map(
    (project, index) => `<div>
    <img src="images/${index + 1}.PNG" />
    <div class="overlay">
    <h2>${project}</h2>
    ${
      index < 9
        ? `<a href="Projects/0${
            index + 1
          } - ${project}/index.html" target="_blank" class="btn">Live Demo</a>`
        : `
        <a href="Projects/${
          index + 1
        } - ${project}/index.html" target="_blank" class="btn">Live Demo</a>
          `
    }
    </div>
</div>`
  )
  .join("")}`;
