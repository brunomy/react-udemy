export default function ComponenteFilho({funcaoPassada, count}){

    function incrementarContador(){
        funcaoPassada(count+1);
    }


    return <button onClick={incrementarContador}>Executar função</button>
}