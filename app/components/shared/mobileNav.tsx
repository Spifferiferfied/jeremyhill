'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import HeaderLink from './headerLink'

export default function MobileNav() {
  const [mobileNavClass, setMobileNavClass] = useState('close')
  useEffect(() => {
    setMobileNavClass('')
  }, [mobileNavClass])

  return (
    <>
      <button
        type="button"
        className="md:hidden absolute top-4 left-4 z-30 bg-white"
        onClick={ () => {
          if (mobileNavClass === 'open') {
            setMobileNavClass('close')
          }
          else {
            setMobileNavClass('open')
          }
          return false
        } }
      >
        <Image src="/images/icons/hamburger-menu.svg" height={ 38 } width={ 43 } alt="Menu" />
      </button>
      <ul className={ `${ mobileNavClass } absolute left-0 top-20 right-0 bg-white mobile-header z-10` }>
        <li>
          <HeaderLink href="/about">About</HeaderLink>
        </li>
        <li>
          <HeaderLink href="/blog">Musings</HeaderLink>
        </li>
        <li>
          <HeaderLink href="https://www.instagram.com/jeremyhill83/">Photography</HeaderLink>
        </li>
        <li className="">
          <HeaderLink href="https://github.com/Spifferiferfied">Code</HeaderLink>
        </li>
      </ul>
    </>
  )
}
