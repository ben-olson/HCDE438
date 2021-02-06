import { useState } from 'react';
import './styles/App.css';
import './scripts/TextInput';
import TextInput from './scripts/TextInput';
import Message from './scripts/Message';
import UsernameInput from './scripts/NamePicker';

function App() {
  const [messages, setMessages] = useState([{text:'hello', username:''}])
  const [username, setUsername] = useState('')
  return (
    <div className="App">
      <header className="header">
        <div className="logo"></div>
        <h2>Chattot</h2>
        <UsernameInput
          placeholder = "Set Username"
          saveUsername = {t=> setUsername(t)}
        />
      </header>

      <main className="messages">

        {messages.map((m,i)=> {
          return <Message key={i} {...m} />
        })}

      </main>
      <TextInput
        placeholder = "Write your message..."
        send = {t=> setMessages( [{text:t, username:username}, ...messages] )}
      />
    </div>
  );
}

export default App;
