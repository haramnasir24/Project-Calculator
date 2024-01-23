const gridContainer = document.querySelector('#container')
const header = document.querySelector('#header')

header.textContent = '0'
const rows = 5
const columns = 4

// creates grid layout and populates the buttons
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        const gridItem = document.createElement('button')
        gridItem.className = 'grid-item'

        // populating 
        if (i == 0 && j == 0) {
            gridItem.textContent = "("
        }
        if (i == 0 && j == 1) {
            gridItem.textContent = ")"
        }
        if (i == 0 && j == 2) {
            gridItem.textContent = "SPACE"
        }
        if (i == 1 && j == 0) {
            gridItem.textContent = "7"
        }
        if (i == 2 && j == 0) {
            gridItem.textContent = "4"
        }
        if (i == 3 && j == 0) {
            gridItem.textContent = "1"
        }
        if (i == 4 && j == 0) {
            gridItem.textContent = "0"
        }
        if (i == 1 && j == 1) {
            gridItem.textContent = "8"
        }
        if (i == 2 && j == 1) {
            gridItem.textContent = "5"
        }
        if (i == 3 && j == 1) {
            gridItem.textContent = "2"
        }
        if (i == 1 && j == 2) {
            gridItem.textContent = "9"
        }
        if (i == 2 && j == 2) {
            gridItem.textContent = "6"
        }
        if (i == 3 && j == 2) {
            gridItem.textContent = "3"
        }
        if (i == 0 && j == 3) {
            gridItem.textContent = "CLEAR"
        }
        if (i == 1 && j == 3) {
            gridItem.textContent = "÷"
        }
        if (i == 2 && j == 3) {
            gridItem.textContent = "x"
        }
        if (i == 3 && j == 3) {
            gridItem.textContent = "-"
        }
        if (i == 4 && j == 3) {
            gridItem.textContent = "+"
        }
        if (i == 4 && j == 2) {
            gridItem.textContent = "="
        }
        if (i == 4 && j == 1) {
            gridItem.textContent = "."
        }

        gridContainer.appendChild(gridItem)

        // adding event listeners to buttons
        gridItem.addEventListener('click', () => {
            let text = gridItem.textContent

            if (text == '=') {
                let array = header.textContent;
                const matches = array.match(/(\d+(\.\d+)?|[+\-x÷])/g);

                if (matches && matches.length >= 3) {
                    let result = parseFloat(matches[0]);

                    for (let i = 1; i < matches.length; i += 2) {
                        const operator = matches[i];
                        const operand = parseFloat(matches[i + 1]);

                        switch (operator) {
                            case '+':
                                result += operand;
                                break;
                            case '-':
                                result -= operand;
                                break;
                            case 'x':
                                result *= operand;
                                break;
                            case '÷':
                                if (operand !== 0) {
                                    result /= operand;
                                } else {
                                    header.textContent = 'Error: Division by zero';
                                    return;
                                }
                                break;
                            default:
                                header.textContent = 'Error: Invalid operator';
                                return;
                        }
                    }
                    header.textContent = result
                }
            }

            else if (text == 'SPACE') {
                if (header.textContent != '0') {
                    newTextContent = header.textContent.slice(0, -1)
                    header.textContent = newTextContent
                }
                else {
                    header.textContent = '0'
                }
            }

            else if (text == 'CLEAR') {
                header.textContent = '0'
            }

            else {
                if (header.textContent != '0') {
                    header.textContent += text
                }
                else {
                    header.textContent = text
                }
            }
        })
    }
}
