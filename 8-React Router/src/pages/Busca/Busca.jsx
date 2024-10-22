import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from '../../hooks/useFetch'

const Busca = () => {
    const [searchParams] = useSearchParams();

    const url = "http://localhost:3000/products?"+searchParams;
    
    const {data: itens, loading, error} = useFetch(url)

  return (
    <div>
        <h1>Resultados encontrados:</h1>
        <ul className="products">
            {error && <p>Ocorreu um erro...</p>}
            {loading && <p>Carregando...</p>}
            {
                itens && itens.map((item) => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                        <Link to={`/produto/${item.id}`}>Detalhes</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Busca