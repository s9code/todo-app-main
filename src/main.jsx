import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Todolist from './components/Todolist'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.Fragment>
      <Todolist />
    </React.Fragment>
  )
