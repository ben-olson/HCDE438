import {useState} from 'react'
import {keyPressed} from './utils'

function UsernameInput(props) {

  const [username, setUsername] = useState('')
  const [showUserInput, setShowUserInput] = useState(false)
  
  function sendUsername() {
    props.saveUsername(username)
    setShowUserInput(false)
  }

  if (showUserInput) {
    return (
      <div className="[ container__username ]">
        <input
          className="[ input__username ]"
          value={username}
          onChange = {e=> setUsername(e.target.value)}
          onKeyPress={e=> {
              if (keyPressed(e, 'Enter')) {
                sendUsername()
              }
            }
          }
        >
        </input>
        <button 
          className="[ button__set ]"
          onClick={sendUsername}
        >
          <div className="[ icon__set ]">B</div>
        </button>
      </div>
    );
  }

  return (
    <div name="[ container__username ]">
      <div
      >{username || props.placeholder}</div>
      <button
        className="[ button button__confirm ]"
        onClick={()=> setShowUserInput(true)}>
        <div className="[ icon icon__confirm ]">C</div>
      </button>

    </div>
  )

}
export default UsernameInput