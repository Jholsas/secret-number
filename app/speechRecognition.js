const elementGuess = document.getElementById('guess')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
// recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result',onSpeak)

function onSpeak(e){
    guess = e.results[0][0].transcript
    showGuessOnScreen(guess)
    guessingIsValid(guess)
}

function showGuessOnScreen(guess){
    elementGuess.innerHTML =`
    <div>You Say:</div>
    <span class="box">${guess}</span>`
}

recognition.addEventListener('end',() => recognition.start())