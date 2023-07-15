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

  emojiClicked = id => {
    console.log(id)
    const {listOfEmojisClicked, score, topScore} = this.state

    this.setState(prevState => ({
      listOfEmojisClicked: [...prevState.listOfEmojisClicked, id],
    }))

    const isEmojiPreviouslyClicked = listOfEmojisClicked.includes(id)

    if (!isEmojiPreviouslyClicked) {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      this.setState(prevState => ({topScore: prevState.score}))
    }

    if (isEmojiPreviouslyClicked || score === 11) {
      let newTopScore = topScore
      if (score > newTopScore) {
        newTopScore = score
      }

      this.setState({isGameInProgress: false, topScore: newTopScore})
    }

    console.log(isEmojiPreviouslyClicked)
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

    console.log(listOfEmojisClicked)

    console.log(`score ${score}`)
    console.log(`top score ${topScore}`)

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
