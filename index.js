const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const boardColor = "#333"
const boardWidth = 900
const boardHeight = 600

let snakeX = (boardWidth / 2)
let snakeY = (boardHeight / 2)
const snakeSize = 15
const snakeColor = "green"


const initGame = () => {
    ctx.fillStyle = boardColor
    ctx.fillRect(0, 0, boardWidth, boardHeight)

    ctx.fillStyle = snakeColor
    ctx.fillRect(snakeX, snakeY, snakeSize, snakeSize)
}

const updateSnakePosition = (event) => {
    let direction = event.key

    ctx.fillStyle = boardColor
    ctx.fillRect(snakeX, snakeY, snakeSize, snakeSize)

    if (direction === "ArrowRight") {
        snakeX += snakeSize
    } else if (direction === "ArrowLeft") {
        snakeX -= snakeSize
    } else if (direction === "ArrowUp") {
        snakeY -= snakeSize
    } else {
        snakeY += snakeSize
    }

    ctx.fillStyle = snakeColor
    ctx.fillRect(snakeX, snakeY, snakeSize, snakeSize)
}

document.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "ArrowUp" && e.key !== "ArrowDown") {
        return
    }

    updateSnakePosition(e)
})

initGame()
