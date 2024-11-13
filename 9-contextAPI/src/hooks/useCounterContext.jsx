import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function useCounterContext() {
    const context = useContext(CounterContext)

    if(!context){
        console.log("sem contexto");
    }

    return context;
}