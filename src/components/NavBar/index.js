import './index.css'

const NavBar = props => {
  const {stateDetails} = props
  const {score, topScore, isGameInProgress} = stateDetails

  return (
    <nav>
      <div className="game-logo-title">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="game-title">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="score-container">
          <p className="score-text">Score: {score}</p>
          <p className="top-score-text">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
