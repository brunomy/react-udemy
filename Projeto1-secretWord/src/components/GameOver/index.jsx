import styles from './GameOver.module.scss'

export default function GameOver({func1, score}) {
    return (
        <div className={styles.content}>
            <h1>Fim de jogo</h1>
            <h2>A sua pontuação foi <span>{score}</span></h2>
            <button onClick={func1}>Resetar Jogo</button>
        </div>
    )
}