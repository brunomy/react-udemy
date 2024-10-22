import { useState, useRef } from 'react'
import styles from './Game.module.scss'

export default function Game({
    verifyLetter,
    pickedWord,
    pickedCategory,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score
}) {
    const [letter, setLetter] = useState('');
    const letterInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        verifyLetter(letter);
        setLetter('');

        letterInputRef.current.focus();
    }

    return (
        <div className={styles.content}>
            <p className="points"><span>Pontuação: {score}</span></p>
            <h1>Adivinhe a palavra:</h1>
            <h3 className="tip">
                Dica sobre a palavra: <span>{pickedCategory}</span>
            </h3>
            <p>você ainda tem {guesses} tentativas(s)</p>
            <div className={styles.wordContainer}>
                {
                    letters.map((letter, i) => (
                        guessedLetters.includes(letter) ? (
                            <span key={i} className="letter">{letter}</span>
                        ) : (
                            <span key={i} className="blankSquare"></span>
                        )
                    ))
                }
            </div>
            <div className={styles.letterContainer}>
                <p>Tente adivinhas uma letra da palavra:</p>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" name='letter' maxLength="1" required 
                        onChange={(e) => setLetter(e.target.value)} 
                        value={letter}
                        ref={letterInputRef}
                    />
                    <button>Jogar!</button>
                </form>
            </div>
            <div className="wrongletterContainer">
                <p>Letars já utilizadas:</p>
                {
                    wrongLetters.map((letter, i) => (
                        <span key={i}>{letter} , </span>
                    ))
                }
            </div>
        </div>
    )
}