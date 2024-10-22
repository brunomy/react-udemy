import { useState, useEffect, useCallback } from 'react'
import './App.scss'
import { wordsList } from './data/words'
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' }
]

function App() {

  //VARIAVEIS
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setpickedCategory] = useState('')
  const [letters, SetLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScrore] = useState(0)

  //FUNÇOES
  const pickWordAndCategory = useCallback(() => {
    const categorias = Object.keys(words);
    const categoria = categorias[Math.floor(Math.random() * Object.keys(categorias).length)];

    const word = words[categoria][Math.floor(Math.random() * words[categoria].length)]

    return {word, categoria}
  });


  const startGame = useCallback(() => {
    clearLetterStates();

    const { word, categoria } = pickWordAndCategory()
    setGameStage(stages[1].name)

    //create array letter
    let wordLetters = word.split('')

    wordLetters = wordLetters.map((letra) => letra.toLowerCase());

    //fill states
    setPickedWord(word)
    setpickedCategory(categoria)
    SetLetters(wordLetters)
  }, [pickWordAndCategory]);

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    //check if letter has already been utilized
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return;
    }

    //push guessed letter or remove a chance
    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  };

  function clearLetterStates() {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  //check loose condition
  useEffect(() => {
    if(guesses <= 0){
      //reset all states
      clearLetterStates()

      setGameStage(stages[2].name)

    }
  }, [guesses]);


  //check win condition
  useEffect(() => {
    const uniqueletters = [...new Set(letters)];

    if(guessedLetters.length === uniqueletters.length){
      setScrore((actualScore) => actualScore += 100);

      //new word
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  const restart = () => {
    setScrore(0);
    setGuesses(3);
    setGameStage(stages[0].name)
  }

  return (
    <div className='App'>
      { gameStage == 'start' && <StartScreen func1={startGame} /> }
      { gameStage == 'game' && 
        <Game 
          verifyLetter={verifyLetter} 
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        /> }
      { gameStage == 'end' && <GameOver func1={restart} score={score}/> }
    </div>
  )
}

export default App
