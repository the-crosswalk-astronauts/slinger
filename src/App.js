import React from 'react';
import './App.scss';
import routes from './routes'
import {HashRouter} from 'react-router-dom'

function App() {
  return (
    <div >

      <HashRouter>
      {routes}
      </HashRouter>
    </div>
  );
}

export default App;
