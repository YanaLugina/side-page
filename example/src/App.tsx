import React, { useState } from 'react'

import { SidePage, Wrapped } from 'side-page'
import 'side-page/dist/index.css'

const App = () => {

  const handlePush2 = () => {
    setForModal( s => [...s, { id: '5', data: [<div key={555}>Yap!</div>] }])
  }

  const initialWrapped : Wrapped[] = []

  const [forModal, setForModal] = useState(initialWrapped);

  const handlePush1 = () => {
    setForModal( s => [...s, { id: '4', data: [<button key={3434} onClick={handlePush2}>Add</button>] }])
  }

  const handlePopClose = (id: string) => {
    setForModal(s => s.length > 0 ? s.slice(0, -1) : [])
    console.log('Close', id)
  }

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
          key={(new Date()).getDate().toString()}
          id={(new Date()).getDate().toString()}
          handlePopClose={(id: string) => handlePopClose(id)}
          wrappedArr={forModal}
        />
        <button onClick={() => handlePush1()}>Open</button>
      </div>
    )
}

export default App
