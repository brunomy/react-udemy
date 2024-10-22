import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import MyForm from "./components/MyForm";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h2>Formulários</h2>
            <MyForm user={{name: 'Bruno', email: 'bruno@email.com', bio: 'Aquele mamilo rosado', role: 'admin'}}/>
        </div>
    ) 
}

export default App;
