//selecting the popbox and pop overlay and button
var popboxoverlay = document.querySelector(".popup-overlay")
var popbox = document.querySelector(".popup-box")

// adding the book button
var addpopbutton = document.getElementById("add-pop-button")
addpopbutton.addEventListener("click", function () {
    popboxoverlay.style.display = "block"
    popbox.style.display = "block"
})

// selecting container,submit-button,Book-name-input,Author-name-input,Description-input
var container = document.querySelector(".container")
var addbook = document.getElementById("submit-button")
var bookname = document.getElementById("Book-name-input")
var bookauthor = document.getElementById("Author-name-input")
var bookdescription = document.getElementById("Description-input")

addbook.addEventListener("click", function (event) {
    event.preventDefault()
    // Creating an Div to store new adding element
    var div = document.createElement("div")
    //choose the attribute
    div.setAttribute("class", "book-container")
    //inner element
    div.innerHTML = `<h2>${bookname.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deletebook(event)">use me to remove</button>`
    container.append(div)
    popboxoverlay.style.display = "none"
    popbox.style.display = "none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}
