import { useState } from 'react'
import './App.scss'
import { useFetch } from './hooks/useFetch';

//pacote para realizar requisições HTTP
//npm i json-server

// https://www.udemy.com/course/react-do-zero-a-maestria-c-hooks-router-api-projetos/learn/lecture/31444846#overview

const url = "http://localhost:3000/products"

function App() {
  // const [products, setProducts] = useState([]);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  
  //#region Resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url)

  //     const data = await res.json()
  
  //     setProducts(data)
  //   }

  //   fetchData();
  // }, [])

  //#region Resgatando dados com Hooks
  const { data, httpConfig, loading, error } = useFetch(url)

  


  //#region Adicionar produto
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = { name, price }

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // })

    //   //#region Carregamento Dinâmico
    // const addedProduct = await res.json()
    // setProducts((prevProducts) => [...prevProducts, addedProduct])

    //#region Refatorando POST
    httpConfig(product, "POST")

    setName('')
    setPrice('')
  }


  return (
    <div className="App">
      <h1>Lista de produtos</h1>

      {/* Loading */}
      { loading && <p>Carregando Dados;</p> }
      { error && <p>{error}</p> }

      {
        !error && 
        <ul>
          {
            data && data.map((item) => (<li key={item.id}>{item.name} - {item.price}</li>))
          }
        </ul>
      }

      <div className="addProduct">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Price:
            <input type="number" value={price} name='price' onChange={(e) => setPrice(e.target.value)} />
          </label>
          {/* State de loading POST */}
            <input disabled={loading} type="submit" value="Criar Product" />
        </form>
      </div>
    </div>
  )
}

export default App
