import React from 'react'

import { SidePage, SidePageProvider, useSidePage } from 'side-page'
import NewComponent from './NewComponent/NewComponent'
import 'side-page/dist/index.css'

const App = () => {
  /* set some initial data */
  const { sidePages, addSidePage, sliceSidePage } = useSidePage()
  console.log('sidePages', sidePages);
  /* const handlePush2 = () => {
    addSidePage({ id: '5', data: [<div key={555}>Yap!</div>] })
  } */

  const handlePush1 = () => {
    addSidePage({ id: '4', data: [<NewComponent key={5656} handleAddSidePage={addSidePage} />] })
  }

  const handlePopClose = (id: string) => {
    sliceSidePage()
    console.log('Close', id)
  }

  return (
      <SidePageProvider value={sidePages}>
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
          />
          <button onClick={() => handlePush1()}>Open</button>
        </div>
      </SidePageProvider>
    )
}

export default App
