class Snail {
    constructor(options) {
        this.imgWidth = options.imgWidth
        this.width = document.documentElement.clientWidth - this.imgWidth
        this.name = options.name
        this.age = options.age
        this.mainColor = options.mainColor
        this.points = Math.round(Math.random() * this.width)
        this.selector = document.querySelector(`#${options.selector}`)
    }

    move() {
        this.selector.style.transform = `translateX(${this.points}px)`
    }
}

const garry = new Snail({
    name: 'Garry',
    age: 5,
    mainColor: 'pink',
    selector: 'garry',
    imgWidth: document.getElementById('garry').clientWidth
})

const bob = new Snail({
    name: 'Bob',
    age: 3,
    mainColor: 'brown',
    selector: 'bob',
    imgWidth: document.getElementById('bob').clientWidth
})

const turbo = new Snail({
    name: 'Turbo',
    age: 4,
    mainColor: 'blue',
    selector: 'turbo',
    imgWidth: document.getElementById('turbo').clientWidth
})

function getWinner() {
    let competitors = [
        {
            name: bob.name,
            points: bob.points
        },
        {
            name: garry.name,
            points: garry.points
        },
        {
            name: turbo.name,
            points: turbo.points
        },
    ]
    let max = Math.max(bob.points, garry.points, turbo.points)
    let winner = ''
    competitors.forEach(c => {
        if (c.points === max) {
            winner = `The winner is ${c.name} with ${c.points} points`
        }
    })
    return winner
}

const startBtn = document.querySelector('.start-btn')
const resetBtn = document.querySelector('.reset-btn')
const winner = document.querySelector('.winner')

startBtn.addEventListener('click', () => {
    let snails = [garry, bob, turbo]
    snails.forEach(s => s.move())
    startBtn.disabled = true
    resetBtn.disabled = false
    setTimeout(() => winner.innerHTML = getWinner(), 1000)
})

resetBtn.addEventListener('click', () => location.reload())




