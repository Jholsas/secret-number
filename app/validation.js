function guessingIsValid(guess) {
    const guessingNumber = +guess

    if (invalidGuess(guessingNumber)) {
        console.log(guessingNumber)
        if (guess.toUpperCase() === "GAME OVER") {
            console.log('ok!')
            document.body.innerHTML =
                `   
                    <h2>Game Over!!!</h2>
                    <h3>Press the button or say play again</h3>
                    <button id="play-again" class="btn-play" >Play Again</button>
                `
            document.body.style.backgroundColor = "black";
        } else if (guess.toUpperCase() === "PLAY AGAIN") {
            window.location.reload();
        } else {
            elementGuess.innerHTML += '<div>Guessing Invalid</div>'
        }
        return
    }

    if (numberBiggerOrSmallerOfTheAllowed(guessingNumber)) {
        elementGuess.innerHTML += `
        <div>
            Number out of bounds! The guessing number must be between ${smallerNumber} and ${biggerNumber}
        </div>`
        return
    }

    if (guessingNumber === secretNumber) {
        document.body.innerHTML = `
            <h2> You Win! </h2>
            <h3> The secret number was ${secretNumber} </h3>
            <p>Press the button or say play again</p>
            <button id="play-again" class="btn-play">Play Again</button>
            `
    } else if (guessingNumber > secretNumber) {
        elementGuess.innerHTML += `
        <div>The secret number is smaller! <i class="fa-solid fa-arrow-down-long"></i></div>`
    } else {
        elementGuess.innerHTML += `
        <div>The secret number is bigger! <i class="fa-solid fa-arrow-up-long"></i></div>`
    }


}

function invalidGuess(guessingNumber) {
    console.log(guessingNumber)
    return Number.isNaN(guessingNumber)
}

function numberBiggerOrSmallerOfTheAllowed(guessingNumber) {
    return guessingNumber > biggerNumber || guessingNumber < smallerNumber
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'play-again') {
        window.location.reload();
    }
})