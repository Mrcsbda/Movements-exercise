const printMovements = (movements,container) => {
    container.innerHTML = "";
    movements.forEach((movement, index) => {
        container.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${movement.description}</td>
            <td>${movement.price}</td>
            <td>${movement.type}</td>
            <td>
            <span class="material-symbols-outlined delete">delete</span>
            <span class="material-symbols-outlined edit">edit</span>
            </td>
        </tr>
        `
    })
}

export default printMovements