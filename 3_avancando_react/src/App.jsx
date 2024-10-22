import { useState } from "react";
import ImagemAssets from './assets/city.jpg';
import "./App.scss";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName/ShowUserName";
import CarDetails from "./components/CarDetails/CarDetails";
import Children from "./components/Children";
import PassarFuncao from "./components/PassarFuncao";
import ComponentePai from "./components/ComponentePai";
import CssIsolado from "./components/CssIsolado";

function App() {
    const [count, setCount] = useState(0);
    const [carros, setCarros] = useState([
        { brand: 'Fiat', km: '50.000km', color: 'red', newCar: false },
        { brand: 'VW', km: '0km', color: 'blue', newCar: true },
        { brand: 'Toyota', km: '20.000km', color: 'green', newCar: false }
    ])

    function funcao_1(){
        alert('peido')
    }

    return (
        <>
            {/* <div className="App">
                <h1>Avançando em React</h1>
                <div>
                    <img src="/img1.jpg" alt="Paisagem" />
                </div>
                <div>
                    <img src={ImagemAssets} alt="" />
                </div>
            </div>
            <ManageData />
            <ListRender />
            <ConditionalRender />

            <h2 className={ 2 > 1 ? 'Banana' : 'Peido' }>ShowUserName</h2>
            <ShowUserName name="Bruno" />

            <h2 style={ 2 > 1 ? { color: "blue" } : { color: "red" } }>Carros</h2>
            {
                carros.map((car, index) => <CarDetails key={index} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} /> )
            }

            <Children><p>Banana</p></Children>
            <PassarFuncao funcaoPassada={funcao_1} />
            <ComponentePai count={count} funcaoPassada={setCount} /> 
            
            */}

            <CssIsolado/>
        </>
    );
}

export default App;
