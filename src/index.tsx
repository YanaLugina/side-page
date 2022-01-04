import React from 'react'
import SidePageLocal from './SidePage/SidePage'
import { SidePageProvider, SidePageConsumer } from './sidePageContext'
import useSidePage from './useSidePage'

export interface Wrapped {
  id: string
  data: JSX.Element[]
}

export interface Props {
  id: string
  handlePopClose: (arg: string) => void
}

const SidePage = ({ id, handlePopClose }: Props) => {
  return (
    <SidePageConsumer>
      {(context) => (
        <SidePageLocal
          handlePopClose={handlePopClose}
          id={id}
          wrappedArr={context}
        />
      )}
    </SidePageConsumer>
  )
}

export { SidePage, SidePageProvider, useSidePage }
