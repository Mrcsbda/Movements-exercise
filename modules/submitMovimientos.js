import {labels} from '../modules/domElements.js'
import { postMovimiento } from '../services/postMovimientos.js'

const submitMovimiento = async (inputs, select, url) => {

    const moviment = {
        description: inputs[0].value,
        price: inputs[1].value,
        type: select[0].value
    }
    const labelList = Array.from(labels)
    const emptyField = validation(moviment, labelList)

    if (emptyField) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `el formulario presenta los siguientes campos vacios: ${emptyField}`,
          })
    } else {
        await postMovimiento(url, moviment);
        location.reload()
    }
 }

 export default submitMovimiento;

 const validation = (data, labelList) => {
    let emptyField = ""
    for (const key in data) {
        if(!data[key]) {
            const label = labelList.find(item => item.getAttribute('for') === key)
            emptyField+= ` ${label.innerHTML},`
        }
    }
    return emptyField

 }