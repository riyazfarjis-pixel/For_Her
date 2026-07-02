const chatbox = document.querySelector(".chatbox");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function () {
    let message = input.value.trim();

    if (message === "") {
        return;
    }

    // User message
    let userMsg = document.createElement("div");
    userMsg.style.background = "#d1e7ff";
    userMsg.style.padding = "10px";
    userMsg.style.margin = "10px";
    userMsg.style.borderRadius = "10px";
    userMsg.style.textAlign = "right";
    userMsg.innerText = message;
    chatbox.appendChild(userMsg);

    input.value = "";

    // AI reply
    let aiMsg = document.createElement("div");
    aiMsg.className = "ai";
    aiMsg.innerText = "😊 I'm still learning. Soon I'll become a real AI friend!";
    chatbox.appendChild(aiMsg);

    chatbox.scrollTop = chatbox.scrollHeight;
});
