inputArray = []
let operations = "+ \ - x  % = C del".split(" ")
let curr = ""

function parseInputArray(inputArray) {
    let numA = Number(inputArray[0])
    let numB = Number(inputArray[2])
    switch (inputArray[1])
    {
        case "+":
            return numA + numB;

        case "-":
            return numA - numB;

        case "x":
            return numA * numB;
    
        case "/":
            return numA / numB;

        case "%":
            return numA % numB;
    }
}
  



// Change input text of button   
buttons = document.querySelectorAll("button")
buttons.forEach((button) => {

    button.addEventListener('click', () => {
        // If button is operation, don't show that as input
        if (!(operations.includes(button.innerText)))
        {
            document.querySelector(".input-text").innerText =  document.querySelector(".input-text").innerText + button.innerText;
            curr += button.innerText;
        }
        else
        {
            if (curr.length != 0)
            {
                document.querySelector(".input-text").innerText =  '';
                inputArray.push(curr)
                curr = ""
            }

            if (inputArray.length === 3)
            {
                let answer = parseInputArray(inputArray)
                document.querySelector(".input-text").innerText = answer;  
                inputArray = [answer]      
            }

            if (inputArray.length === 1 && operations.includes(button.innerText))
            {
                inputArray.push(button.innerText)                
            }


        }
    });
});