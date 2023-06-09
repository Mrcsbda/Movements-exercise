import getMovements from "./services/getMovimientos.js";
import printMovements from "./modules/printMoviments.js";
import { containerMovements } from "./services/data.js";

document.addEventListener('DOMContentLoaded', async () => {
    const movements = await getMovements()
    printMovements(movements, containerMovements)
})



