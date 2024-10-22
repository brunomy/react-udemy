import { useState } from "react"


export default function ManageData() {
    const [dado, setDado] = useState(0)

    return (
        <div>
            <div>
                <p>valor: {dado}</p>
                <button onClick={ () => setDado(dado + 1) }>acrescentar</button>
            </div>
        </div>
    )
}