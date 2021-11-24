import React, { useState, useEffect } from 'react'
import style from './sidepage.module.scss'

export interface Wrapped {
  id: string
  data: JSX.Element[]
}

export interface Props {
  id: string
  wrappedArr?: Wrapped[] | null
  handlePopClose: (arg: string) => void
}

interface PropItem {
  id: string
  wrapped: JSX.Element[]
  handleCloseItem: () => void
}

const ModalItem = ({ id, wrapped, handleCloseItem }: PropItem) => {
  const [scale, setScale] = useState(false)

  useEffect(() => {
    setTimeout(() => !scale && setScale(true), 600)
  }, [])

  const handleCloseItemLocal = () => {
    handleCloseItem()
  }

  return (
    <div
      id={id}
      className={style.sidePageItem + (scale ? ' ' + style.scaleElement : '')}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={style.spWrap}>{wrapped}</div>
      <div
        className={style.clickAreaItem + ' ' + style.more}
        onClick={() => handleCloseItemLocal()}
      />
    </div>
  )
}

export const SidePage = ({ id, wrappedArr, handlePopClose }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseLocal = (id: string) => {
    handlePopClose(id)
  }

  useEffect(() => {
    if (wrappedArr) {
      if (wrappedArr.length > 0) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
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
