import './index.css'

const WON_GAME_IMG = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const LOSE_GAME_IMG =
  'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {stateDetails, playAgain, isWon} = props
  const {score, topScore} = stateDetails

  const imgSrc = isWon ? WON_GAME_IMG : LOSE_GAME_IMG
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="result-container">
      <img src={imgSrc} className="result-img" alt="win or lose" />
      <div className="result-button-container">
        <h1 className="result-heading">{gameStatus}</h1>
        <p className="score">{scoreLabel}</p>
        <p className="score-number">{score}/12</p>
        <button className="play-again-button" type="button" onClick={playAgain}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
