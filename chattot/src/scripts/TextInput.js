import {useState} from 'react'
import {keyPressed} from './utils'

function TextInput(props) {

  const [text, setText] = useState('')

  function sendMessage(){
    if(text==='') return // skip the function
    props.send(text)
    setText('')
  }

  return <footer className="[ container__message ]">
    <input 
      className="[ input input__message ]"
      placeholder={props.placeholder}
      value={text}
      onChange={e=> setText(e.target.value)}
      onKeyPress={e=> {
        if(keyPressed(e, 'Enter')) {
          sendMessage()
        }
      }
    }
    />
    <button 
      className="[ button button__send_message ]"
      onClick={sendMessage} disabled={!text}>
      <div className="[ icon icon__send_message ]"></div>
    </button>
  </footer>
}
export default TextInput