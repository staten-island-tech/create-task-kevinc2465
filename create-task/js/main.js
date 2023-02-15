import "../styles/style.css";
import { DOM } from "./DOM";

const URL = "https://valorant-api.com/v1/agents";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const datas = await response.json();
    datas.forEach((data) => {
      console.log(data.displayName);
    });
    // infos.forEach((info) => {
    //   // DOM.agents.insertAdjacentHTML(
    //   //   "beforeend",
    //   //   `
    //   //     <div class="result">
    //   //     <h2 class="beverage-name">${info.displayName}</h2>
    //   //     </div>
    //   //   `
    //   // );
    //   console.log(info.displayName);
    // });
  } catch (error) {
    console.log(error);
  }
}

getData(URL);
