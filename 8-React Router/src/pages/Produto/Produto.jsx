import { useParams } from "react-router"
import { useFetch } from "../../hooks/useFetch"
import { Link } from 'react-router-dom'

export default function Produto() {
    // Rota dinamica
    const {id} = useParams()

    // carregamento individual
    const url = `http://localhost:3000/products/${id}`;
    const {data: product, loading, error} = useFetch(url);

    return (
        <>
            {error && <p>Ocorreu um erro...</p>}
            {loading && <p>Carregando...</p>}

            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <p>R${product.price}</p>
                    {/* Nested routes */}
                    <Link to={`/produto/${product.id}/info`}>Mais informações</Link>
                </div>
            )}
        </>
    )
}