import React from 'react';
import './App.scss';
import routes from './routes'
import { HashRouter } from 'react-router-dom'
import  {Provider}  from 'react-redux'
import store from './Redux/store'


function App() {
  return (
    <div >
      <Provider store={store}>
        <HashRouter>
          {routes}
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
