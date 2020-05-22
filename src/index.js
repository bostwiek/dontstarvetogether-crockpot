import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'

import fonts from './fonts/fonts.css'

ReactDOM.render(
  <React.StrictMode>
    <Main fonts={fonts} />
  </React.StrictMode>,
  document.getElementById('root')
);