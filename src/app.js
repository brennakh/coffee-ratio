//function coffeeToWaterRatio(coffeeAmount){
//    let coffeeAmountNumber = Number(coffeeAmount)
//    alert(coffeeAmountNumber * 16)
//}

//function startingAtZero(){
 //   amount = 0
 //   document.querySelector('#waterAmountResult').innerText = amount
//}

let amount = 0

//document.querySelector('#waterAmountResult').addEventListener('click', coffeeToWaterRatio)



function coffeeToWaterRatio(){
    let coffeeAmount = document.getElementById('coffeegrams').value
    let coffeeAmountNumber = Number(coffeeAmount)

    let coffeeRatio = document.getElementById('coffeeratio').value
    let coffeeRatioNumber = Number(coffeeRatio)

    let result = coffeeAmountNumber * coffeeRatioNumber
    let ounces = Math.ceil(result * 0.035)
    document.getElementById('waterAmountResult').textContent = result
    document.getElementById('waterAmountOunces').textContent = ounces
}

const startingMinutes = 10
let time = startingMinutes * 60;

const countdownElement = document.getElementById('countdown');

setInterval(updateCountdown, 1000)

function updateCountdown() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownElement.innerHTML = `${minutes}:${seconds}`
    time--;
}