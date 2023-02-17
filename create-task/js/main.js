import "../styles/style.css";
import { DOM } from "./DOM";

const URL = "https://valorant-api.com/v1/agents/";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const infos = await response.json();
    console.log(infos.data[0].displayName);
    infos.forEach((info) => {
      DOM.agents.insertAdjacentHTML(
        "beforeend",
        `
            <div class="result">
            <h2 class="agent-name">${info.data.displayName}</h2>
            </div>
            `
      );
    });
  } catch (error) {
    console.log(error);
  }
}

getData(URL);
