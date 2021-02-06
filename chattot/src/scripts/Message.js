function Message(props) {
  return (
    <div className="[ message ]">
      <div className="[ message__username ]">{props.username}</div>
      <div className="[ message__text ]">{props.text}</div>
      <div className="[ message__date ]"></div>
    </div>
  )
}

export default Message