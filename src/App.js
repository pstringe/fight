import './App.css';
import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import OpponentView from './OpponentView';
import Tools from './Tools';
import '@fontsource/roboto';


function App() {
  const [opponents, setOpponents] = useState([
    {
        name: 'Elon Musk',
        url: ''
    },
    {
        name: 'Donald Trump',
        url: ''
    },
    {
        name: 'Joe Rogan',
        url: ''
    }
  ]);
  const [current, setCurrent] = useState(0);

  const swipeLeft = () => {
    setOpponents(cur=> {
      let newOpponents = cur.slice();
      newOpponents.splice(current, 1);
      return newOpponents;
    })
    
  };

  const swipeRight = () => {
    setCurrent(cur => Math.min(opponents.length - 1, cur + 1));
  };

  const goBack = () => {
    setCurrent(cur => Math.max(0, cur - 1));
  }

  return (
    <Box className="app">
      <Header/>
      <OpponentView opponent={opponents[current]}/>
      <Tools back={goBack} left={swipeLeft} right={swipeRight}/>
    </Box>
  );
}

export default App;
