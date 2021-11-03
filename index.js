class Snail {
    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.mainColor = options.mainColor
        this.points = Math.round(Math.random() * 1000)
        this.selector = document.querySelector(`#${options.selector}`)
    }

    move () {
        this.selector.style.transform = `translateX(${this.points}px)`

    }

}

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

    if(competitors[0].points > competitors[1].points && competitors[0].points > competitors[2].points ) {
        return `The winner is ${competitors[0].name} with ${competitors[0].points} points`
    } else if (competitors[1].points > competitors[0].points && competitors[1].points > competitors[2].points){
        return `The winner is ${competitors[1].name} with ${competitors[1].points} points`
    } else if (competitors[2].points > competitors[0].points && competitors[2].points > competitors[1].points) {
        return `The winner is ${competitors[2].name} with ${competitors[2].points} points`
    } else {
        return `Dead heat or error`
    }

}

const garry = new Snail({
    name: 'Garry',
    age: 5,
    mainColor: 'pink',
    selector: 'garry'
})

const bob = new Snail({
    name: 'Bob',
    age: 3,
    mainColor: 'brown',
    selector: 'bob'
})

const turbo = new Snail({
    name: 'Turbo',
    age: 4,
    mainColor: 'blue',
    selector: 'turbo'
})
const startBtn = document.querySelector('.start-btn')
const resetBtn = document.querySelector('.reset-btn')
const winner = document.querySelector('.winner')

startBtn.addEventListener('click', () => {
    garry.move()
    bob.move()
    turbo.move()
    startBtn.disabled = true
    resetBtn.disabled = false
    setTimeout(() => winner.innerHTML = getWinner(), 1000)
})

resetBtn.addEventListener('click', () => location.reload())




