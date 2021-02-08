import {useState} from 'react'
import {keyPressed} from './utils'

function UsernameInput(props) {

  const [username, setUsername] = useState(localStorage.getItem('username') || '')
  const [showUserInput, setShowUserInput] = useState(false)
  
  function sendUsername() {
    props.saveUsername(username)
    setShowUserInput(false)
    localStorage.setItem('username', username)
  }

  if (showUserInput) {
    return (
      <div className="[ container__username ]">
        <input
          className="[ input input__username ]"
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
          className="[ button button__confirm_username ]"
          onClick={sendUsername}
        >
          <div className="[ icon icon__confirm_username ]"></div>
        </button>
      </div>
    );
  }

  return (
    <div className="[ container__username ]">
      <div className="[ username bold ]">{username || 'Set Username'}</div>
      <button
        className="[ button button__set_username]"
        onClick={()=> setShowUserInput(true)}>
        <div className="[ icon icon__set_username ]"></div>
      </button>

    </div>
  )

}
export default UsernameInput