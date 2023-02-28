import "../styles/style.css";
import { DOM } from "./DOM";

const URL = "https://valorant-api.com/v1/agents/";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const infos = await response.json();
    console.log(infos.data);
    infos.data.forEach((info) => {
      DOM.agents.insertAdjacentHTML(
        "beforeend",
        `
            <div class="result">
            <h2 class="agent-name">${info.displayName}</h2>
            <img class="image" src= "${info.bustPortrait}" alt= "agent-protrait"/>
            <img class="skills" src= "${info.bustPortrait}" alt= "agent-protrait"/>
            </div>
            `
      );
    });
  } catch (error) {
    console.log(error);
  }
}

getData(URL);
