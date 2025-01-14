import { Button } from '@/components/Button'
import Image from 'next/image'
import React from 'react'
import HeroCarousel from './HeroCarousel'
import styles from '../stylesheet/hero.module.css'

const HeroHome = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.items}>
        <HeroCarousel className="w-full max-w-full min-w-full">
          <div className={styles.item}>
            <div className="columns-between h-full">
              <div>
                <div className={styles.banner}>
                  <Image
                    src="/banner/banner1.jpg"
                    width={540}
                    height={360}
                    alt=""
                    loading="eager"
                  />
                </div>
                <div className={styles.caption}>
                  <h3 className="text-base md:text-xl">
                    The Best Gifts - Only at Sephora
                  </h3>
                  <div className="mt-1 text-sm">
                    Limited-edition picks to delight everyone on your list.
                  </div>
                </div>
              </div>
              <Button
                copy="XEM NGAY ▸"
                variant="secondary"
                className="w-[160px] m-3"
              />
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.banner}>
              <Image
                src="/banner/banner6.jpg"
                width={540}
                height={360}
                alt=""
              />
            </div>
            <div className={styles.caption}>
              <div>
                <h3 className="text-xl">The Best Gifts - Only at Sephora</h3>
                <div className="mb-3 text-sm">
                  Limited-edition picks to delight everyone on your list. <br />
                </div>
              </div>
              <Button
                copy="XEM NGAY ▸"
                variant="secondary"
                className="w-[160px]"
              />
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.banner}>
              <Image
                src="/banner/banner4.jpg"
                width={540}
                height={360}
                alt=""
              />
            </div>
            <div className={styles.caption}>
              <h3 className="text-xl">The Best Gifts - Only at Sephora</h3>
              <div className="mb-3 text-sm">
                Limited-edition picks to delight everyone on your list.
              </div>
              <Button
                copy="XEM NGAY ▸"
                variant="secondary"
                className="w-[160px]"
              />
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.banner}>
              <Image
                src="/banner/banner2.jpg"
                width={540}
                height={360}
                alt=""
              />
            </div>
            <div className={styles.caption}>
              <h3 className="text-xl">The Best Gifts - Only at Sephora</h3>
              <div className="mb-3 text-sm">
                Limited-edition picks to delight everyone on your list.
              </div>
              <Button
                copy="XEM NGAY ▸"
                variant="secondary"
                className="w-[160px]"
              />
            </div>
          </div>
        </HeroCarousel>
      </div>
    </div>
  )
}

export default HeroHome
