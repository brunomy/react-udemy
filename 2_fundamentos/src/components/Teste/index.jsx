import './styles.scss'

const Teste = (props) => {

    return (
        <div>
            <h1>Mensagem de teste</h1>
            <button onClick={ () => props.func1(39) }>teste</button>
        </div>
    )
}

export default Teste;