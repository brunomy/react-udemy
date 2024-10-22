import { useState } from "react"

export default function ConditionalRender() {
    const [x] = useState(true)

    const [name, setName] = useState('Bruno')

    return (
        <div>
            <h1>isso será exibido?</h1>
            { x && <p>Se x for true sim</p> }
            { !x && <p>Agora x é falso</p> }


            { name == 'João' ? <p>Sim é João</p> : <p>Não é João o nome</p> }
            { name == 'João' ? <p>Sim é João</p> : name == 'Pedro' ? <p>O nome é pedro</p> : <p>O nome não é João nem Pedro</p> }

            <button onClick={() => setName('João')}>Mudar nome para João</button>
        </div>
    )
}