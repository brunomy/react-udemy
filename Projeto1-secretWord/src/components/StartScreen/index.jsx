import styles from './StartScreen.module.scss'

export default function StartScreen ({func1}) {
    return (
        <div className={styles.content}>
            <h1>Secret Word</h1>
            <p>Clique no botão abaixo para começar a jogar</p>
            <button onClick={func1}>Começar o jogo</button>
        </div>
    )
}