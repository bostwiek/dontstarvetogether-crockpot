import React from 'react'
import ReactDOM from 'react-dom'
import Test from './Test'

import fonts from './fonts/fonts.css'

ReactDOM.render(
  <React.StrictMode>
    <Test fonts={fonts} />
  </React.StrictMode>,
  document.getElementById('root')
);