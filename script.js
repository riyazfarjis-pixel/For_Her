const chatbox = document.querySelector(".chatbox");
const input = document.querySelector("input");
const button = document.querySelector("button");

const replies = [
  "😊 I'm here for you.",
  "💙 Everything will be okay.",
  "🌸 You are stronger than you think.",
  "🤝 Tell me more. I'm listening.",
  "✨ Stay calm. I'm with you."
];

button.addEventListener("click", function () {
  const message = input.value.trim();

  if (message === "") return;

  const user = document.createElement("div");
  user.className = "ai";
  user.style.background = "#d9ecff";
  user.style.marginLeft = "20%";
  user.innerText = message;
  chatbox.appendChild(user);

  input.value = "";

  const ai = document.createElement("div");
  ai.className = "ai";
  ai.innerText = replies[Math.floor(Math.random() * replies.length)];
  chatbox.appendChild(ai);

  chatbox.scrollTop = chatbox.scrollHeight;
});
