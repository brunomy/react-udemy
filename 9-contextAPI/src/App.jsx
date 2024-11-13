import './App.css'
import useCounterContext from './hooks/useCounterContext'
import useTitleColorContext from './hooks/useTitleColorContext';

function App() {
    // const { counter, setCounter } = useContext(CounterContext)

    const { counter, setCounter } = useCounterContext();
    // const { color, setColor } = useTitleColorContext()
    const { color, dispatch } = useTitleColorContext()


    const setTitleColor = (color) => {
        dispatch({ type: color })
    }

    return (
        <>
            <span style={{ color: color }}>Número: { counter }</span><br/><br/>
            <button onClick={ () => setCounter(counter + 1) }>Incrementar</button>
            <button onClick={ () => setTitleColor('RED') }>Mudar cor</button>
        </>
    )
}

export default App
