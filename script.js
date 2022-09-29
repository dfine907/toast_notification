const button = document.getElementById("button")
const toasts = document.getElementById("toasts")

const messages = [
  "You're brilliant!",
  "Take a day off!",
  "You're smile lights up the room",
  "Watch a funny YouTube video",
  "Think sunny thoughts",
]

const types = ["info", "success", "error"]

button.addEventListener("click", () => createNotification())

function createNotification(message = null, type = null) {
  const notifcation = document.createElement("div")
  notifcation.classList.add("toast")
  notifcation.classList.add(type ? type : getRandomType())

  notifcation.innerHTML = message ? message : getRandomMessage()

  toasts.append(notifcation)

  setTimeout(() => {
    notifcation.remove()
  }, 2500)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)]
}
