import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <Wrap>
      <Header>
        <TextField label="Search for memes" variant="outlined" style={{width:'calc(100% - 110px)'}} />
        <Button variant="contained" color="primary" style={{height:55, marginLeft:10, width:100}}>
          Search
        </Button>
      </Header>
      <Body></Body>
    </Wrap>
  );
}

const Wrap = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  height:100vh;
`
const Header = styled.div`
  width: 100%;
  min-height: 50px;
`

const Body = styled.div`
  width:100%;
  display:flex;
  flex-wrap:wrap;
  flex:1;
  overflow:auto;
`

export default App;
