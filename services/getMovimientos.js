import { urlApi } from "./data.js";

const getMovements = async () => {
    try {
        const {data, status} = await axios.get(urlApi)
        if (status === 200) {
            return data;
        }
    } catch (error) {
        console.log(error)
        return []
    }
}

export default getMovements