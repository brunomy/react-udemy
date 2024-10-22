import styles from './Home.module.scss'
import { Link } from 'react-router-dom'
import { useFetch } from './../../hooks/useFetch'

export default function Home() {
    // carregamento de dados

    const url = 'http://localhost:3000/products';

    const { data: itens, loading, error } = useFetch(url);

    return (
        <div className={styles.home}>
            <h1>Produtos</h1>
            {error && <p>{error}</p>}
            <ul className={styles.products}>
                {
                    itens && itens.map(item => (
                        <li key={item.id}>
                            <h2>{item.name}</h2>
                            <p>R$: {item.price}</p>
                            <Link to={`/produto/${item.id}`}>Detalhes</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}