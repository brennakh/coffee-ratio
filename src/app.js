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
    // console.log("hi")
    //console.log(coffeeAmount)
    let coffeeAmountNumber = Number(coffeeAmount)
    let result = coffeeAmountNumber * 16
    //alert(result)
    document.getElementById('waterAmountResult').textContent = result
}

