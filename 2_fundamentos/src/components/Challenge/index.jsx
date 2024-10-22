import { useState } from "react"


export default function Soma(){
    let [valor1, setValor1] = useState(0)
    let [valor2, setValor2] = useState(0)



    return (
        <div>
            <input type="number" value={valor1} onChange={ (e) => setValor1(e.target.value) }  />
            <input type="number" value={valor2} onChange={ (e) => setValor2(e.target.value) }  />
            <br />
            Soma: <b>{Number(valor1) + Number(valor2)}</b>
        </div>
    )
}