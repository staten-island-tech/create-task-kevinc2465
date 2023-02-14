import "../styles/style.css";
import { DOM } from "./DOM";

const URL = "https://valorant-api.com/v1/agents";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const datas = await response.json();
    console.log(datas);
    datas.forEach((data) => {
      DOM.agents.insertAdjacentHTML(
        "beforeend",
        `
            <div class="result">
            <h2 class="beverage-name">${data.displayName}</h2>
            <img class="image" src= "${data.fullPortrait}"/>
            <p class="paragraph">Descriptions: ${data.description}</p>
            </div>
          `
      );
    });
  } catch (error) {
    console.log(error);
  }
}

getData(URL);
