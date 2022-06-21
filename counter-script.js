const counterEl = document.getElementById('counter')
const totalCount = document.getElementById('total')

let currentCount = 0
let sumTotalCount = 0


const increaseCounter = function() {
    currentCount++
    sumTotalCount++
    counterEl.innerHTML = currentCount
}

const decreaseCounter = function() {
    currentCount--
    currentCount
    currentCount < 0 ? currentCount = 0 : null
    
    counterEl.innerHTML = currentCount
}

const totalCounter = function() {
    totalCount.innerText = `Sum Total ${sumTotalCount}`
}

const resetCounter = function() {
    counterEl.innerText = 0
    currentCount = 0
}
