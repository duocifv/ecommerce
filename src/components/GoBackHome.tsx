'use client'

import { useRouter } from 'next/navigation'
import { FC, ReactNode, useEffect, useState } from 'react'

const GoBackHome: FC<{
  children: ReactNode
  className?: string
}> = (p) => {
  const router = useRouter()
  const [isFromHome, setIsFromHome] = useState(false)

  useEffect(() => {
    const referrer = document.referrer
    const homeURL = `${window.location.origin}/`
    setIsFromHome(referrer === homeURL)
  }, [])

  const handleBackOrHome = () => {
    router.push('/')
    if (isFromHome) {
      //router.back()
    }
  }

  return (
    <button className={p.className} onClick={handleBackOrHome}>
      {p.children}
    </button>
  )
}

export default GoBackHome
