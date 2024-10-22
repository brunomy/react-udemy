import { useEffect, useState } from "react";


//#region Custom hook
export function useFetch (url){
    const [data, setData] = useState(null)

    //#region Refatorando POST
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    //#region Loading
    const [loading, setLoading] = useState(false)

    //#region Tratando erros
    const [error, setError] = useState(null)

    const httpConfig = (data, method) => {
        if(method == 'POST'){
            setConfig({
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })

            setMethod(method)
        }
    }

    useEffect(() => {
        const fetchData = async () => {

            // Loading
            if(!loading){

                try{
                    setLoading(true)
        
                    const res = await fetch(url).then((response) => response.json())
        
                    setData(res)
        
                    setLoading(false)
                }
                catch(error){
                    console.log(error.message)
                    setError('Houve algum erro ao carregar os dados!')
                }
            }
        }

        fetchData()
    }, [url, callFetch])

    //#region Refatorando POSTdata
    useEffect(() => {
        const httpRequest = async () => {
            if(method == 'POST'){
                let fetchOptions = [url, config]
                const res = await fetch(...fetchOptions)

                const json = await res.json()
    
                setCallFetch(json)
            }
        }

        httpRequest()
    }, [config, method, url])

    return { data, httpConfig, loading, error }
}