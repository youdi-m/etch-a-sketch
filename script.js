const mainContainer = document.querySelector(".container")

for (let i = 0; i < 256; i++)
{
    var div = document.createElement('div');
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.float = "left";
    div.style.margin = "3.13px";
    div.style.background = "#e84a5f";
    div.style.borderRadius = "7px";
    mainContainer.appendChild(div)
}