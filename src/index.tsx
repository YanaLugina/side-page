import React from 'react'
import SidePageLocal from './SidePage/SidePage'
import useSidePage from './useSidePage'

export interface Wrapped {
  id: string
  data: JSX.Element[]
}

export interface Props {
  id: string
  handlePopClose: (arg: string) => void
  value: Wrapped[]
}

const SidePage = ({ id, handlePopClose, value }: Props) => {
  return (
    <SidePageLocal handlePopClose={handlePopClose} id={id} wrappedArr={value} />
  )
}

export { SidePage, useSidePage }
