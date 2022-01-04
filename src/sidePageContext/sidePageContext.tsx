import { createContext } from 'react'

// eslint-disable-next-line
import { Wrapped } from '../index'

const initial: Wrapped[] = []

const { Provider: SidePageProvider, Consumer: SidePageConsumer } =
  createContext(initial)

export { SidePageProvider, SidePageConsumer }
