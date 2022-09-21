import { useState } from "react"

const AddTarea = ({ onAdd }) => {
    const [texto, setTexto] = useState("")
    const [fecha, setFecha] = useState("")
    const [terminada, setTerminada] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!texto) {
            alert("Agregala descripción de la tarea")
            return
        }
        onAdd({ texto, fecha, terminada })
        setTexto("")
        setFecha("")
        setTerminada(false)

    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="">Tarea</label>
                <input type="text" placeholder="Agregar una Tarea" value={texto} onChange={(e) => setTexto(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="">Fecha</label>
                <input type="text" placeholder="Agregar una Fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="">Terminada</label>
                <input type="checkbox" className="form-control-check" checked={terminada} value={terminada}
                    onChange={(e) => setTerminada(e.currentTarget.checked)} />
            </div>
            <input type="submit" value="Guardar" className="btn btn-block " />

        </form>

    )
}

export default AddTarea