import deleteMovimiento from "../services/deleteMovimiento.js";

const deletePrintedMovimientos = (url, deleteButtons) => {
    deleteButtons.forEach(button => {
        button.addEventListener('click', async () => {
            Swal.fire({
                title: 'Esta usted seguro de eliminar este movimiento?',
                showDenyButton: true,
                confirmButtonText: 'Confirmar',
                denyButtonText: `No`,
              }).then(async (result) => {
                if (result.isConfirmed) {
                    const idMovimiento = button.getAttribute("data-id");
                    await deleteMovimiento(url, idMovimiento)
                    location.reload()
                }
              })
        })
    });
}

export default deletePrintedMovimientos;