import React from 'react';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

import { ThemeProvider } from 'styled-components';
import usePersistedState from './components/utils/usePersistedState';

import light from './components/styles/themes/light';
import dark from './components/styles/themes/dark';

import GlobalStyle from './components/styles/global';
import Header from './components/Header';

import './styles/components/app.sass';

function App() {

  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title == 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <><div id='header'>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme}/>
      </div>
    

      <div id="portifolio">
        <h1>Gianlucca Augusto</h1>
          <Sidebar />
          <MainContent />
      </div></>
    </ThemeProvider>
  );
}

export default App;
