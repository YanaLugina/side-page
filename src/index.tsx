import React, { useState, useEffect } from 'react'
import style from './sidepage.module.scss'

export interface Props {
  isOpen: boolean
  wrapped: JSX.Element | null
  handleClose: React.MouseEventHandler<HTMLElement>
}

export const SidePage = ({ isOpen, wrapped, handleClose }: Props) => {
  const [scale, setScale] = useState(false)

  const handleCloseLocal = (e: any) => {
    setTimeout(() => handleClose(e), 600)
    setScale(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isOpen) {
        setScale(true)
      } else {
        setScale(false)
      }
    })

    return () => clearTimeout(timer)
  }, [isOpen])

  const sp = (
    <div className={style.sidePage + (scale ? ' ' + style.scaleElement : '')}>
      <div className={style.spWrap}>{wrapped}</div>
      <div className={style.clickArea} onClick={handleCloseLocal} />
    </div>
  )

  return <div id='side_page'>{isOpen ? sp : ''}</div>
}
