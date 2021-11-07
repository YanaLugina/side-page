import * as React from 'react'
import style from './sidepage.module.scss'

export interface Props {
  name: string
}

export const SidePage = ({ name }: Props) => {
  return (
    <div className={style.spWrap}>
      { name }
    </div>
  )
}
