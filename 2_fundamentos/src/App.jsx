import { useState } from "react";
import "./App.scss";
import Teste from "./components/Teste";
import Soma from "./components/Challenge";


function App() {
    const [count, setCount] = useState(0);

    function acrescentar (i) {
        setCount(count + i)
    }


    return (
        <>
            <Teste func1={acrescentar} />
            {count}
            <br />
            <br />
            <Soma />
        </>
    );
}

export default App;
