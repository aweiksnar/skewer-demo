var nums = document.querySelectorAll('.num');
var roulette;

function hi(name) {
    return "Hi " + name
}

hi("Alex")

// skewer.log(hi("Skewer"))
// console.log(hi("Console"))

function randBetween(min, max) {
    return ~~(Math.random() * (max - min)) + min
}

randBetween(1, 1000000)

function setHtml(node, html) {
    node.innerHTML = html
}

setHtml(nums[0], randBetween(1, 10))
setHtml(nums[1], randBetween(1, 10))
setHtml(nums[2], randBetween(1, 10))

function randomizeNums(nodes, min, max) {
    [].forEach.call(nodes, function(node){
        setHtml(node, randBetween(min, max))
    })
}

randomizeNums(nums, 1, 10)

function playRoulette() {
    randomizeNums(nums, 1, 10)
    roulette = setTimeout(playRoulette, 1)
}

playRoulette()

function stopRoulette() {
    clearTimeout(roulette)
    roulette = null
}

stopRoulette()

function onClickButton(e) {
    e.target.classList.toggle('playing')
    roulette ? stopRoulette() : playRoulette()
}

document.querySelector('button').addEventListener('click', onClickButton)
