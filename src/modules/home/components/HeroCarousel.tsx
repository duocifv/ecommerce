'use client'
import classNames from 'classnames'
import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'

const HeroCarousel: FC<{ className?: string; children: ReactNode }> = (p) => {
  const carousel = useRef(null)
  const carouselChild = useRef(null)
  const [client, setClient] = useState(0)
  const [items, setItems] = useState(0)
  const [item, setItem] = useState(0)
  const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0)
  const [isHorizontalSwipe, setIsHorizontalSwipe] = useState(false)
  const [isVerticalSwipe, setIsVerticalSwipe] = useState(null)
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const handTouchstart = (e) => {
    const touchStartX = e.touches[0].clientX
    const touchStartY = e.touches[0].clientY
    setStartX(touchStartX)
    setStartY(touchStartY)
    setIsHorizontalSwipe(false)
  }
  const handTouchmove = (e) => {
    const touchMoveX = e.touches[0].clientX
    const touchMoveY = e.touches[0].clientY

    const deltaX = touchMoveX - startX
    const deltaY = touchMoveY - startY

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      setIsHorizontalSwipe(true)
      setIsVerticalSwipe(0)
      console.log('lướt ngang, tạm bỏ')
    }
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      setIsVerticalSwipe(isVerticalSwipe + 1)
    }
    if (isVerticalSwipe) {
      console.log('lướt dọc, tạm bỏ', isVerticalSwipe)
    }
  }
  const handleTouchEnd = (e) => {
    e.stopPropagation()
    e.preventDefault()

    if (e.changedTouches && e.changedTouches[0]) {
      const end = e.changedTouches[0].clientX
      const diff = end - startX

      if (Math.abs(diff) > 40 && isHorizontalSwipe) {
        if (diff < 0 && current < count - 1) {
          setCurrent(current + 1)
        }
        if (diff > 0 && current > 0) {
          setCurrent(current - 1)
        }
      }
    }
  }

  const updateDimensions = () => {
    if (carousel.current) {
      const element = carousel.current
      console.dir(element, element.clientWidth)
      setClient(element.clientWidth)
    }

    if (carouselChild.current) {
      const el = carouselChild.current
      setItems(el.firstElementChild.clientWidth * el.childElementCount)
      setCount(el.childElementCount)
    }
  }

  useEffect(() => {
    updateDimensions()
    window.addEventListener('resize', () => {
      setItem(0)
      updateDimensions()
    })
    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  const handleNext = () => {
    let itemNext = item + client
    const rest = items - itemNext
    if (client > rest) {
      itemNext = item + rest
    }
    setItem(itemNext)
  }

  const handlePre = () => {
    let itemPre = item - client
    if (itemPre <= 0) {
      itemPre = 0
    }
    setItem(itemPre)
  }
  const handleWheel = (e) => {
    e.stopPropagation()
    //e.preventDefault();
  }
  return (
    <div
      className={classNames(
        'products-container',
        p.className,
        isVerticalSwipe < 6 && isVerticalSwipe !== null && 'sortable-handler'
      )}
    >
      {item > 0 && (
        <button
          className="products-carousel-button pre !left-5 hidden md:block"
          onClick={handlePre}
        >
          <i className="products-carousel-icon bg-white text-dark shadow-md hover:bg-secondary">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="32px"
              width="32px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M15.61 7.41 14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"></path>
            </svg>
          </i>
        </button>
      )}
      {!(item + client >= items) && (
        <button
          className="products-carousel-button next !right-5 hidden md:block"
          onClick={handleNext}
        >
          <i className="products-carousel-icon bg-white text-dark shadow-md hover:bg-secondary">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="32px"
              width="32px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M10.02 6 8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"></path>
            </svg>
          </i>
        </button>
      )}

      <div ref={carousel} className={classNames('products', p.className)}>
        <div className="products-carousel">
          <div
            className="products-carousel-items effect"
            style={{
              left: `${startX > 0 ? (current < count - 1 ? -current * 85 + '%' : `calc(-${current * 85 - 15 + '%'} - 8px)`) : -item + 'px'}`,
            }}
            ref={carouselChild}
            onTouchStart={handTouchstart}
            onTouchMove={handTouchmove}
            onTouchEnd={handleTouchEnd}
            onWheel={handleWheel}
          >
            {p.children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCarousel
