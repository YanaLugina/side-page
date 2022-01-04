import React, { useEffect, useState } from 'react'
import style from '../sidepage.module.scss'

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

export default ModalItem
