import './App.css';
import Login from './components/Login/Login'
import {Container, Button, Flex} from './components/styles/UI'
import { ThemeProvider } from 'styled-components'
import { theme } from './utilities/constant'
import { fetchapi } from './utilities/helper'
import axios from 'axios';

function App() {
    async function getUsers () {
    const data = await fetchapi('http://localhost:3000/users')
    console.log(data)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container className="App" height="100%" width="inherit">
        {/* Login */}
        <Flex>
          <Login></Login>
        </Flex>
      </Container>
    </ThemeProvider>
  );
}

export default App;
