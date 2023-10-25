const formGuess = document.getElementById("form-guess")
const numberEl = document.getElementById("number-el")

const wrongNumber = document.getElementById("wrong-number")
const attemptNumber = document.getElementById("attempt-number")

formGuess.addEventListener("submit", (evt) => {
  evt.preventDefault()
})


// let numberUser
let randomNumber
let attempts = 0
let maxAttempts = 3

function getRandomNumber() {
  randomNumber = Math.floor(Math.random() * 10) + 1
  numberEl.focus()
  return console.log(`el numero random es ${randomNumber}`)
}

function play() {
  let numberUser = Number(numberEl.value)
  numberEl.value = ""
  numberEl.focus()
  console.log(numberUser)

  if (numberUser === randomNumber) {
    console.log(`acertaste!`)
    wrongNumber.textContent = `Acertaste!! ${numberUser} es el número 🥳`
    attemptNumber.textContent = `Lo lograste en el intento Nro. ${attempts + 1} 🎉`
    return
  } else if (numberUser > randomNumber) {
    console.log(`${numberUser} es mayor que ramdom number`)
  } else {
    console.log(`${numberUser} es menor que ramdom number`)
  }
  attempts++

  wrongNumber.textContent = `Ingresaste ${numberUser} 🤨`
  attemptNumber.textContent = `Intento Nro. ${attempts} 😑`

  if (attempts < maxAttempts) {
    console.log(`Intento: ${attempts}`) 
  } else {
    console.log(`fallate: intento ${attempts}`)
    return
  }
}