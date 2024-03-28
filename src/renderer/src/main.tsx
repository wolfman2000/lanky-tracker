import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import Modal from 'react-modal'
import App from './App'

Modal.setAppElement('#root')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
