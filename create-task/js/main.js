import "../styles/style.css";
import { DOM } from "./DOM";

const URL = "https://valorant-api.com/v1/agents/";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const infos = await response.json();
    infos.data.forEach((info) => {
      DOM.agents.insertAdjacentHTML(
        "beforeend",
        `
            <div class="result">
            <h2 class="agent-name">${info.displayName}</h2>
            <img class="image" src= "${info.bustPortrait}"> 
            <p class="description">"${info.description}"</p>
            </div>
            `
      );
    });
  } catch (error) {
    console.log(error);
  }
}

getData(URL);

function clearField() {
  document.querySelectorAll(".result").forEach((result) => {
    result.remove();
  });
}

async function sortVampire() {
  try {
    const response = await fetch(URL);
    const infos = await response.json();
    const results = infos.data.filter(
      (info) => info.developerName === `Vampire`
    );
    results.forEach((info) => {
      DOM.agents.insertAdjacentHTML(
        "beforeend",
        `
            <div class="result">
            <h2 class="agent-name">${info.displayName}</h2>
            <img class="image" src= "${info.bustPortrait}"> 
            <p class="description">"${info.description}"</p>
            </div>
            `
      );
    });
  } catch (error) {
    console.log(error);
  }
}

DOM.Vampire.addEventListener("click", function () {
  clearField();
  sortVampire();
});

async function sortBountyHunter() {
  try {
    const response = await fetch(URL);
    const infos = await response.json();
    const results = infos.data.filter(
      (info) => info.developerName === `BountyHunter`
    );
    results.forEach((info) => {
      DOM.agents.insertAdjacentHTML(
        "beforeend",
        `
            <div class="result">
            <h2 class="agent-name">${info.displayName}</h2>
            <img class="image" src= "${info.bustPortrait}"> 
            <p class="description">"${info.description}"</p>
            </div>
            `
      );
    });
  } catch (error) {
    console.log(error);
  }
}

DOM.BountyHunter.addEventListener("click", function () {
  clearField();
  sortBountyHunter();
});

DOM.reset.addEventListener("click", function myFunction() {
  clearField();
  getData(URL);
});

DOM.up.addEventListener("click", function topFunction() {
  document.documentElement.scrollTop = 0;
});
