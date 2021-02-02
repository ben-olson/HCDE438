import { useState } from 'react';
import './App.css';
import './TextInput';
import TextInput from './TextInput';
import Message from './Message';

function App() {
  const [messages, setMessages] = useState([{text:'hello'}])
  return (
    <div className="App">
      <header className="header">
        <div className="logo"></div>
        <h2>Chattot</h2>
      </header>

      <main className="messages">

        {messages.map((m,i)=> {
          return <Message key={i} {...m} />
        })}

      </main>
      <TextInput
        placeholder = "write your message"
        send = {t=> setMessages( [{text:t}, ...messages] )}
      />
    </div>
  );
}

export default App;
