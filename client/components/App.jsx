import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import DataForm from './DataForm'
import DataReader from './dataApiReader'



const App = () => (
  <Router>
    <div className='app-container'>
        <DataReader/>
        <DataForm/>
        Hello !
    </div>
  </Router>
)

export default App
