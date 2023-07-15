import {Component} from 'react'
import NavBar from '../NavBar'
import WinOrLossCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    isGameInProgress: true,
    listOfEmojisClicked: [],
  }

  finishGameAndSetTopScore = currentScore => {
    console.log(`currentScore ${currentScore}`)
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  emojiClicked = id => {
    const {emojisList} = this.props
    const {listOfEmojisClicked, score} = this.state

    const isEmojiPreviouslyClicked = listOfEmojisClicked.includes(id)

    if (isEmojiPreviouslyClicked) {
      this.finishGameAndSetTopScore(score)
    } else {
      if (emojisList.length - 1 === listOfEmojisClicked.length) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({score: prevState.score + 1}))
      this.setState(prevState => ({
        listOfEmojisClicked: [...prevState.listOfEmojisClicked, id],
      }))
    }
  }

  renderScoreCard = () => {
    const {score} = this.state
    const isWon = score === 12

    return (
      <WinOrLossCard
        isWon={isWon}
        stateDetails={this.state}
        playAgain={this.playAgain}
      />
    )
  }

  playAgain = () => {
    this.setState({isGameInProgress: true, score: 0, listOfEmojisClicked: []})
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <ul className="emoji-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            eachEmoji={eachEmoji}
            emojiClicked={this.emojiClicked}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isGameInProgress, listOfEmojisClicked, score, topScore} = this.state

    return (
      <div className="game-container">
        <NavBar stateDetails={this.state} />
        <div className="emoji-game-body">
          {isGameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
