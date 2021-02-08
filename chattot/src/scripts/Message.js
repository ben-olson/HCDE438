function Message(props) {
  console.log(props.date)
  return (
    <div className="[ message ]">
      <div className="[ message__username bold ]">{props.username}</div>
      <div className="[ message__text ]">{props.text}</div>
      <div className="[ message__date ]"></div>
    </div>
  )
}

export default Message