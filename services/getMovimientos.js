import { urlApi } from "./data.js";

const getMovements = async () => {
    try {
        const response = await axios.get(urlApi)
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.log(error)
    }
}

export default getMovements