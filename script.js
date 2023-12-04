//variables
var gridNum = 0
var containerWidth = 900
var containerHeight = 900

//html elements
const mainContainer = document.querySelector(".container")
const enterButton = document.querySelector("#enterButton")
const gridInput = document.querySelector("#gridNum")

//setting container width and height
mainContainer.style.width = containerWidth + 'px'
mainContainer.style.height = containerHeight + 'px'

//event listener to draw grid once the button is pressed
enterButton.addEventListener('click', () => {
    drawGrid()
})

//function to draw the grid in main container
function drawGrid() {
    //setting the number of blocks to draw in the grid equal to the number input by user
    gridNum = gridInput.value

    //for loop to draw grid
    for (let i = 0; i < Math.pow(gridNum, 2); i++) {
        //creating the block element as 'div'
        var div = document.createElement('div');

        //styling the block element and settings its properties
        div.style.width = containerWidth/gridNum + 'px'
        div.style.height = containerHeight/gridNum + 'px'
        div.style.background = "rgb(232, 74, 95)"
        div.style.outline = "solid"
        div.style.outlineWidth = "0.1px"
        div.style.outlineColor = "#ff847c"
        div.style.borderRadius = "7px"

        //appending the block element to the mainContainer
        mainContainer.appendChild(div)
    }
}