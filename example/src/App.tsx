import React, { useState, useEffect } from 'react'

import { SidePage, Wrapped } from 'side-page'
import 'side-page/dist/index.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePush = () => {
    setForModal( s => [...s, { id: '2', data: [<div key={555}>Yap!</div>] }])
  }

  const initialWrapped : Wrapped[] = [
    { id: '1', data: [<button key={3434} onClick={handlePush}>Add</button>] }
  ]

  const [forModal, setForModal] = useState(initialWrapped);

  useEffect(() => {
    isOpen && setForModal(initialWrapped);
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false);
    setForModal([])
    console.log('App set close')
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
          isOpenModal={isOpen}
          handleClose={handleClose}
          wrappedArr={forModal}
        />
        <button onClick={() => setIsOpen(true)}>Open</button>
      </div>
    )
}

export default App
