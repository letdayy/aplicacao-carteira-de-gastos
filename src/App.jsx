import './App.css';
import Router from './routes.jsx';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
  }
`;

function App() {
  return (
    <>
    <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
