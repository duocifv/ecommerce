import classNames from 'classnames'
import React, { FC } from 'react'

const Line: FC<{ left?: number; top?: number; className?: string }> = (p) => {
  const marginLeft = p.left ? p.left / 16 + 'rem' : ''
  const marginTop = p.top ? p.top / 16 + 'rem' : ''
  return (
    <hr
      className={classNames('line', p.className)}
      style={{ marginLeft, marginTop }}
    />
  )
}

export default Line
