const smallerNumber = 10
const biggerNumber = 100
const secretNumber = createRandomNumber()

function createRandomNumber() {
    return parseInt(Math.random() * biggerNumber + 1)
}

console.log('Secret Number: ',secretNumber  )

const elementSmallerValue = document.getElementById('smaller-value')
elementSmallerValue.innerHTML = smallerNumber

const elementBiggerValue = document.getElementById('bigger-value')
elementBiggerValue.innerHTML = biggerNumber