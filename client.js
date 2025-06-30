const socket = new WebSocket("ws://localhost:3000");

socket.onmessage = (event) => {
  const messages = document.getElementById("messages");
  const message = document.createElement("div");
  message.textContent = event.data;
  messages.appendChild(message);
};

function sendMessage() {
  const input = document.getElementById("msgInput");
  socket.send(input.value);
  input.value = "";
}
