import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export default function useTitleColorContext() {
    const context = useContext(TitleColorContext);

    if(!context){
        console.log('not found context');
    }

    return context;
}