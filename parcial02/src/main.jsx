import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { TodoApp } from './Todo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp/>
  </React.StrictMode>,
)
