import { useState, useMemo } from 'react'

// eslint-disable-next-line
import { Wrapped } from '../index'

const useSidePage = () => {
  const initialWrapped: Wrapped[] = useMemo(() => [], [])

  const [contextSidePage, setContextSidePage] = useState(initialWrapped)

  const addData = (data: Wrapped) => {
    setContextSidePage((s) => [...s, data])
  }

  const sliceData = () => {
    setContextSidePage((s) => (s.length > 0 ? s.slice(0, -1) : initialWrapped))
  }

  return {
    sidePages: contextSidePage,
    addSidePage: addData,
    sliceSidePage: sliceData
  }
}

export default useSidePage
