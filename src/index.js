import React from 'react'
import ReactDOM from 'react-dom'
import Mockup from './Mockup'

import fonts from './fonts/fonts.css'

ReactDOM.render(
  <React.StrictMode>
    <Mockup fonts={fonts} />
  </React.StrictMode>,
  document.getElementById('root')
);