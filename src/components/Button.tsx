import classNames from 'classnames'
import React, { FC, ReactNode } from 'react'

export const ButtonGroup: FC<{
  children?: ReactNode
}> = (p) => {
  return <div className="button-group">{p.children}</div>
}

export const Button: FC<{
  className?: string
  copy?: ReactNode | string
  children?: ReactNode | string
  size?: 'small' | 'medium' | 'large'
  variant?: 'secondary' | 'primary' | 'tertiary' | 'light' | 'primary-outline'
  onClick?: () => void
}> = (p) => {
  return (
    p.copy && (
      <button
        className={classNames(
          'button',
          p.variant === 'light' && `button-light`,
          p.variant === 'tertiary' && `button-tertiary`,
          p.variant === 'secondary' && `button-secondary`,
          p.variant === 'primary' && `button-primary`,
          p.variant === 'primary-outline' && `button-primary-outline`,
          p.size === 'small' && `button-small`,
          p.size === 'medium' && `button-medium`,
          p.size === 'large' && `button-large`,
          p.className
        )}
        onClick={p.onClick}
      >
        {p.copy}
      </button>
    )
  )
}
