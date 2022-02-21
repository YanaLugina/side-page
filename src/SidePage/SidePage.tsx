// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import style from '../sidepage.module.scss'
import ModalItem from '../ModalItem'

export interface Wrapped {
  id: string
  data: JSX.Element[]
}

export interface Props {
  id: string
  wrappedArr?: Wrapped[] | null
  handlePopClose: (arg: string) => void
}

const SidePage = ({ id, wrappedArr, handlePopClose }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseLocal = (id: string) => {
    handlePopClose(id)
  }

  useEffect(() => {
    if (wrappedArr) {
      setIsOpen(wrappedArr.length > 0)
    }
  }, [wrappedArr])

  const sp = (
    <div className={style.sidePage}>
      {wrappedArr &&
        wrappedArr.length > 0 &&
        wrappedArr.map((modal) => {
          return (
            <ModalItem
              key={modal.id}
              id={modal.id}
              wrapped={modal.data}
              handleCloseItem={() => handleCloseLocal(modal.id)}
            />
          )
        })}
      <div className={style.clickArea} />
    </div>
  )

  return <div id={'sidePage_' + id}>{isOpen ? sp : ''}</div>
}

export default SidePage
