import getMovements from "./services/getMovimientos.js";
import printMovements from "./modules/printMoviments.js";
import { containerMovements, form, inputs, select } from "./modules/domElements.js";
import deletePrintedMovimientos from "./modules/deleteMovimientos.js"
import { urlApi } from "./services/data.js";
import submitMovimiento from "./modules/submitMovimientos.js";

document.addEventListener('DOMContentLoaded', async () => {
    const movements = await getMovements()
    printMovements(movements, containerMovements)

    //--- Peticion Delete.
    const deleteButtons = document.querySelectorAll('.btn--delete')
    deletePrintedMovimientos(urlApi, deleteButtons);
   
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    submitMovimiento(inputs, select, urlApi)
})

