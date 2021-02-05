import {useState} from 'react'
import {keyPressed} from './utils'

function TextInput(props) {

  const [text, setText] = useState('')

  function sendMessage(){
    if(text==='') return // skip the function
    props.send(text)
    setText('')
  }

  return <footer className="text-input">
    <input 
      className="input"
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
      className="send-button"
      onClick={sendMessage} disabled={!text}>
      <div className="send-icon"></div>
    </button>
  </footer>
}
export default TextInput