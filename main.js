const urlApi = "https://miniback-movements.onrender.com/movements";
const listMovements = [];
const containerMovements = document.querySelector('#tBodyMovements')

const getMovements = async () => {
    try {
        const response = await axios.get(urlApi)
        if (response.status === 200) {
            response.data.forEach((movement) => {
                const newMovement = {
                    id: movement.id,
                    description: movement.description,
                    price: movement.price,
                    type: movement.type,
                }
                listMovements.push(newMovement)
                
            //         if (response.data.length === index + 1) {
            //             )
            //         }
            //     });
            });
            printMovements()
        }
    } catch (error) {
        console.log(error)
    }
}

const printMovements = () => {
    containerMovements.innerHTML = "";
    listMovements.forEach(movement => {
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
getMovements()
