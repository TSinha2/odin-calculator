inputArray = []

// Change input text of button   
buttons = document.querySelectorAll("button")
for (const button of buttons)
{
    button.addEventListener("click", () => 
        document.querySelector(".input-text").innerText = document.querySelector(".input-text").innerText + button.innerText
    )
}