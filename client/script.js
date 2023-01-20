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
