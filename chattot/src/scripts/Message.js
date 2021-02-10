function Message(props) {
  return (
    <div className="[ message__container ]"
    style={{flexDirection:props.isMe ? 'row-reverse' : 'row'}}
    >
      <div className="[ message ]">
        <div className="[ message__username bold ]">{props.name}</div>
        <div className="[ message__text ]">{props.text}</div>
        <div className="[ message__date ]"></div>
      </div>
    </div>
  )
}

export default Message