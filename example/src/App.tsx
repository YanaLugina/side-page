import React from 'react'

import { SidePage, useSidePage } from 'side-page'
import NewComponent from './NewComponent/NewComponent'
import 'side-page/dist/index.css'

const App = () => {
  const { sidePages, addSidePage, sliceSidePage } = useSidePage()

  const handlePush1 = () => {
    addSidePage({ id: '4', data: [<NewComponent key={5656} handleAddSidePage={addSidePage} />] })
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
              handlePopClose={sliceSidePage}
              value={sidePages}
            />
          <button onClick={() => handlePush1()}>Open</button>
        </div>
    )
}

export default App
