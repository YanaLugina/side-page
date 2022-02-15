import React from 'react'

const NewComponent = ({ handleAddSidePage }: { handleAddSidePage: Function }) => {
  const handlePush2 = () => {
    handleAddSidePage({ id: '5', data: [<div key={555}>Yap!</div>] })
  }

  return <button key={3434} onClick={handlePush2}>Add</button>
}

export default NewComponent;
