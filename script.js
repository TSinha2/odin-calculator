inputArray = [];
let operations = "+ ÷ - x  % = C del".split(" ")
let exclusionList = 'C del ='.split(" ")
let num = ""

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
    
        case "÷":
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
            num += button.innerText;
            document.querySelector(".input-text").innerText = num;
        }
        // Operation key has been entered
        else 
        {
            // Number 'entered' when user presses an operation key
            let operation = button.innerText
            console.log("Operation entered " + operation);

            // Reset everything if C is pressed
            if (operation === 'C')
            {
                inputArray = [];
                num = ''
                document.querySelector(".input-text").innerText = num;
            }
            
            // Make sure only a valid number is entered
            if (!(isNaN(num)) && num.length != 0)
            {
                console.log("Number entered " + num)
                inputArray.push(num);
            }

            // Only arithmetic operators (+ - % x /) are entered in the array
            if (!(exclusionList.includes(operation)))
            {
                // inputArray.push(operation)
                inputArray[1] = operation
            }


            // Screen clears
            num = "";
            document.querySelector(".input-text").innerText = "";

            // Evaluate input
            if (inputArray.length > 3 || inputArray.length == 3)
            {
                let answer = parseInputArray(inputArray).toFixed(5);
                if (answer != Infinity) // No division by zero
                {
                    document.querySelector(".input-text").innerText = answer;
                    inputArray = [answer, operation];
                    if (operation === '=')
                    {
                        inputArray = [answer];
                    }
                }
                else // Division by zero
                {
                    document.querySelector(".input-text").innerText = 'lol';
                    inputArray = [];
                    num = '';
                }

            }
        }
    });
});