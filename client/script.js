import bot from "./assets/bot.svg";
import user from "./assets/user.svg";

const form = document.querySelector("form");
const chatContainer = document.querySelector("#chat_container");

let loadInterval;

// Loader function

function loader(element) {
  element.textContent = "";

  loadInterval = setInterval(() => {
    loadInterval += ".";

    if (loadInterval === "....") element.textContent = "";
  }, 300);
}

// type text

function typeText(element, text) {
  let index = 0;

  let interval = setInterval(() => {
    if (index < text.length) {
      element.innerHtml += text.chartAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20);
}
