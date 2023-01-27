const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const search = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

let cites = [];
fetch(endpoint)
  .then((res) => res.json())
  .then((data) => {
    cites.push(...data);
    console.log(cites);
  });

function findMatches(word) {
  const regex = new RegExp(word, "gi");
  return cites.filter(
    (city) => city.city.match(regex) || city.state.match(regex)
  );
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchArray = findMatches(this.value);
  suggestions.innerHTML = matchArray

    .map((city) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = city.city.replace(
        regex,
        `<sapn class="hl">${this.value}</sapn>`
      );
      const stateName = city.state.replace(
        regex,
        `<sapn class="hl">${this.value}</sapn>`
      );
      return `<li><span class="name">${cityName}, ${stateName}</span>
    <span class="population">${numberWithCommas(city.population)}</span>
      </li>`;
    })
    .join("");
}

search.addEventListener("keyup", displayMatches);

// search.addEventListener("keydown", () => {
//   console.log(findMatches(search.value));
// });
