import { useState } from 'react';
import './styles/App.css';
import './scripts/TextInput';
import TextInput from './scripts/TextInput';
import Message from './scripts/Message';
import UsernameInput from './scripts/NamePicker';
import {db, useDB} from './scripts/db';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

function Wrap() {
  return <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/:room' component={App} /> 
    </Switch>
  </BrowserRouter>
}

function App(props) {
  const room = props.match.params.room || 'home'
  const messages = useDB(room)
  const [username, setUsername] = useState(localStorage.getItem('username') || '')
  // console.log("ROOM = ", room)

  return (
    <div className="App">
      <header className="header">
        <div className="logo"></div>
        <h2>Chattot</h2>
        <UsernameInput
          saveUsername = {t=> setUsername(t)}
        />
      </header>

      <main className="messages">

        {messages.map((m,i)=> {
          const isMe = m.name === username
          return <Message key={i} {...m} isMe={isMe} />
        })}

      </main>
      <TextInput
        placeholder = "Write your message..."
        send = {t=> db.send({text:t, name:username, date:new Date(), room:room})}
      />
    </div>
  );
}

export default Wrap;
