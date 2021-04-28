import './App.css';
import {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import OpponentView from './OpponentView';

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

  return (
    <Box className="app">
      <Header/>
      <OpponentView opponent={opponents[current]}/>
      {/*Swipe Tools*/}
    </Box>
  );
}

export default App;
