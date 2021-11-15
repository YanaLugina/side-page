import React, { useState, useEffect } from 'react'
import style from './sidepage.module.scss'

export interface Wrapped {
  id: string
  data: JSX.Element[]
}

export interface Props {
  id: string
  isOpenModal?: boolean
  wrappedArr?: Wrapped[] | null
  handleClose: (arg: string) => void
}

interface PropItem {
  id: string
  wrapped: JSX.Element[]
  handleCloseItem: (arg: string) => void
}

const ModalItem = ({ id, wrapped, handleCloseItem }: PropItem) => {
  return (
    <div
      id={id}
      className={style.sidePage}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={style.spWrap}>{wrapped}</div>
      <div
        className={style.clickArea + ' ' + style.more}
        onClick={() => handleCloseItem(id)}
      />
    </div>
  )
}

export const SidePage = ({
  id,
  isOpenModal,
  wrappedArr,
  handleClose
}: Props) => {
  const [scale, setScale] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const initialState: Wrapped[] = []
  const [modalStack, setModalStack] = useState(initialState)

  useEffect(() => {
    isOpenModal && setIsOpen(true)
  }, [isOpenModal])

  useEffect(() => {
    console.log('-----wrappedArr setData', wrappedArr)
    isOpenModal &&
      wrappedArr &&
      wrappedArr.length > 0 &&
      setModalStack(wrappedArr)
  }, [wrappedArr, isOpenModal])

  const handleCloseItem = (id: string) => {
    console.log('------slice', id)
    if (modalStack.length > 0) {
      setModalStack((s) => {
        const result = s.slice(0, -1)
        if (result.length === 0) {
          handleCloseLocal()
        }
        return result
      })
    }
  }

  const handleCloseLocal = () => {
    setTimeout(() => {
      setIsOpen(false)
      handleClose(id)
    }, 600)
    // setScale(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isOpen) {
        setScale(true)
      } else {
        setScale(false)
      }
    }, 600)

    return () => clearTimeout(timer)
  }, [isOpen])

  const sp = (
    <div className={style.sidePage + (scale ? ' ' + style.scaleElement : '')}>
      {modalStack &&
        modalStack.length > 0 &&
        modalStack.map((modal) => {
          return (
            <ModalItem
              key={modal.id}
              id={modal.id}
              wrapped={modal.data}
              handleCloseItem={handleCloseItem}
            />
          )
        })}
      <div
        className={style.clickArea}
        onClick={() => modalStack.length === 0 && handleCloseLocal()}
      />
    </div>
  )

  return <div id='side_page'>{isOpenModal ? sp : ''}</div>
}
