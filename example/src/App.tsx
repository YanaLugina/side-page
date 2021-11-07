import React from 'react'

import { SidePage } from 'side-page'
import 'side-page/dist/index.css'

const App = () => {
  return (
      <div style={{
        backgroundColor: 'rgb(32, 32, 32)',
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexGrow: 1
      }}>
        <SidePage name='fgfgfgfg' />
      </div>
    )
}

export default App
