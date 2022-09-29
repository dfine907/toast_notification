const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    "You're brilliant!",
    "Take a day off!",
    "You're smile lights up the room",
    "Watch a funny YouTube video",
    "Think sunny thoughts"
]

button.addEventListener('click', createNotification)

function createNotification () {
  const notifcation = document.createElement('div')
  notifcation.classList.add('toast')

  notifcation.innerHTML = getRandomMessage()

  toasts.append(notifcation)

  setTimeout(() => {
    notifcation.remove()
  }, 3000);
}

function getRandomMessage() {
    return messages[Math.floor(Math.random()* messages.length)]
}
