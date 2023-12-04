//variables
var gridNum = 0
var containerWidth = 900
var containerHeight = 900
var divRGB = [232, 74, 95]

//html elements
const mainContainer = document.querySelector(".container")
const enterButton = document.querySelector("#enterButton")
const gridInput = document.querySelector("#gridNum")

//setting container width and height
mainContainer.style.width = containerWidth + 'px'
mainContainer.style.height = containerHeight + 'px'

//event listener to clear the grid then draw grid once the button is pressed
enterButton.addEventListener('click', () => {
    deleteGrid()
    drawGrid()
})

//function to draw the grid in main container
function drawGrid() {
    //setting the number of blocks to draw in the grid equal to the number input by user
    gridNum = gridInput.value

    //for loop to draw grid
    for (let i = 0; i < Math.pow(gridNum, 2); i++) {

        //creating the block element as 'div' and giving it a unique id
        var div = document.createElement('div');
        div.setAttribute("id", "div" + i)
        
        //styling the block element and settings its properties
        div.style.width = containerWidth/gridNum + 'px'
        div.style.height = containerHeight/gridNum + 'px'
        div.style.background = "rgb(" + divRGB[0] + ", " + divRGB[1] + ", " + divRGB[2]
        div.style.outline = "solid"
        div.style.outlineWidth = "0.1px"
        div.style.outlineColor = "#ff847c"
        div.style.borderRadius = "7px"

        div.addEventListener('mouseover', () => {
            divRGB[0] -= 10
            divRGB[1] -= 10
            divRGB[2] -= 10
            div.style.background = "rgb(" + divRGB[0] + ", " + divRGB[1] + ", " + divRGB[2]
        })

        //appending the block element to the mainContainer
        mainContainer.appendChild(div)
    }
}

//function to clear grid
function deleteGrid() {
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
}