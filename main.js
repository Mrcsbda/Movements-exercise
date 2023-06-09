import getMovements from "./services/getMovimientos.js";
const containerMovements = document.querySelector('#tBodyMovements')

document.addEventListener('DOMContentLoaded', async () => {
    const movements = await getMovements()
    printMovements(movements, containerMovements)
})

const printMovements = (movements,container) => {
    container.innerHTML = "";
    movements.forEach(movement => {
        containerMovements.innerHTML += `
        <tr>
            <td>${movement.id}</td>
            <td>${movement.description}</td>
            <td>${movement.price}</td>
            <td>${movement.type}</td>
        </tr>
        `
    })
}

