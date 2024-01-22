const gridContainer = document.querySelector('#container')

const rows = 5
const columns = 4

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        const gridItem = document.createElement('div')
        gridItem.className = 'grid-item'
        gridContainer.appendChild(gridItem)
    }
}
