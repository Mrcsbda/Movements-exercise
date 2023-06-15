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
            <span class="material-symbols-outlined btn--delete" data-id="${movement.id}">delete</span>
            <span class="material-symbols-outlined btn--edit" data-id="${movement.id}">edit</span>
            </td>
        </tr>
        `
    })
}

export default printMovements