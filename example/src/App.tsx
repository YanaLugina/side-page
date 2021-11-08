import React, { useState } from 'react'

import { SidePage } from 'side-page'
import 'side-page/dist/index.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div style={{
        backgroundColor: 'rgb(32, 32, 32)',
        display: 'flex',
        flexFlow: 'column wrap',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexGrow: 1
      }}>
        <SidePage
          isOpen={isOpen}
          handleClose={() => setIsOpen(false)}
          wrapped={<button>Add</button>}
        />
        <button onClick={() => setIsOpen(true)}>Open</button>
      </div>
    )
}

export default App
