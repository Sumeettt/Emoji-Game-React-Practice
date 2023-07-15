import './index.css'

const EmojiCard = props => {
  const {eachEmoji, emojiClicked} = props
  const {id, emojiName, emojiUrl} = eachEmoji

  const onEmojiClick = () => {
    emojiClicked(id)
  }

  return (
    <li className="emoji-card" onClick={onEmojiClick}>
      <button type="button" className="emoji-button">
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
