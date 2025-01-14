import React from 'react'

const FacebookSvg = ({ size = 24, color = '#FEFEFE', className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-labelledby="facebookIconTitle"
      role="img"
      className={className}
    >
      <title id="facebookIconTitle">Facebook Icon</title>
      <path
        d="M19.5 3.556H4.6a.923.923 0 00-.925.921V19.33c0 .508.414.921.924.921h8.022v-6.465h-2.183v-2.52h2.183V9.409c0-2.156 1.321-3.33 3.251-3.33.925 0 1.72.068 1.95.099V8.43h-1.338c-1.05 0-1.253.498-1.253 1.227v1.609h2.503l-.325 2.52H15.23v6.464H19.5c.511 0 .925-.413.925-.921V4.477a.923.923 0 00-.925-.92"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  )
}

export default FacebookSvg
