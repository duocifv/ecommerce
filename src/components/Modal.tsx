import classNames from 'classnames'
import { FC, ReactNode, useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
  style?: any
  className?: string
}

const Modal: FC<ModalProps> = ({
  isOpen,
  style,
  onClose,
  title,
  children,
  className,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden' // Prevent background scrolling
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = '' // Re-enable scrolling
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      role="button"
      className={classNames(
        'fixed inset-0 z-40 flex flex-col justify-end bg-black bg-opacity-50'
      )}
      tabIndex={0}
      onTouchStart={onClose}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClose() // Thêm sự kiện bàn phím
      }}
      onClick={onClose}
    >
      <div
        role="button"
        tabIndex={0}
        className={classNames(
          'effect bottom-0 relative w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg'
        )}
        style={style}
        onTouchStart={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onClose()
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          ✕
        </button>

        <div className={classNames('px-6 py-4 border-b')}>
          <h2 id="modal-title" className="text-lg font-semibold text-gray-800">
            {title}
          </h2>
        </div>

        <div
          className={classNames(
            'px-6 py-4 overflow-y-scroll max-h-[62vh] pb-12',
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
