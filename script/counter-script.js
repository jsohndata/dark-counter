const displayCounter = document.getElementsByClassName('displayCounter')[0]
let currentCount = 0

const renderResult = function(paramWhere,paramWhat) {
    paramWhere.innerHTML = paramWhat
}

const increaseCounter = () => {
    currentCount ++
    renderResult(displayCounter,currentCount)
}

const decreaseCounter = () =>  {
    currentCount --
    currentCount < 0 ? currentCount = 0 : null
    renderResult(displayCounter,currentCount)
}

const resetCounter = () => { 
    currentCount = 0
    renderResult(displayCounter,currentCount)
}