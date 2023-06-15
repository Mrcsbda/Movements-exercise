const deleteMovimiento = async (url, id) => {
    try {
        const urlMovimiento = `${url}/${id}`
        const resp = await axios.delete(urlMovimiento)


    } catch (error) {
        console.log(error)
        return (error)
    }
}

export default deleteMovimiento
