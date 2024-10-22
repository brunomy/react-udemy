import ComponenteFilho from "../ComponenteFilho"


export default function ComponentePai({funcaoPassada, count}) {
    return (
        <>
            <p>Contador: {count}</p>
            <h1>Componente filho</h1>
            <ComponenteFilho funcaoPassada={funcaoPassada} count={count} />
        </>
    )
}