'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  let [ mobileOpen, setMobileOpen ]= useState(false)
  return (
    <header
      className={`flex flex-col items-center justify-between pt-7 border-b border-b-black font-heading container mx-auto`}
    >
      <nav className="w-full">
        <button className="md:hidden absolute top-4 left-4 z-30" onClick={() => {
          setMobileOpen(!mobileOpen)
          return false
        }}>
          <Image src="/images/icons/hamburger-menu.svg" height={ 38 } width={ 43 } alt="Menu" />
        </button>
        <ul className={ `${ mobileOpen ? 'md:hidden' : 'hidden' } absolute left-0 top-0 right-0 pt-14 bg-white border-b mobile-header z-20` }>
          <li>
            <Link className={ `p-4 block $(usePathname() === '/about' ? 'active' : '')` } href="/about">About</Link>
          </li>
          <li>
            <Link className={ `p-4 block $(usePathname() === '/blog' ? 'active' : '')` } href="/blog">Musings</Link>
          </li>
          <li>
            <Link className="p-4 block" href="https://www.instagram.com/jeremyhill83/">Photography</Link>
          </li>
          <li className="">
            <Link className="p-4 block" href="https://github.com/Spifferiferfied">Code</Link>
          </li>
        </ul>
        <ul className="uppercase font-semibold flex flex-row justify-center content-center md:justify-between">
          <li className="mx-4 hidden md:block">
            <Link
              className={usePathname() === '/about' ? 'active' : ''}
              href="/about"
            >
              About
            </Link>
          </li>
          <li className="mx-4 hidden md:block">
            <Link
              className={usePathname() === '/blog' ? 'active' : ''}
              href="/blog"
            >
              Musings
            </Link>
          </li>
          <li className="-mt-5">
            <Link href="/">
              <Image
                className="-mb-5 bg-white px-3"
                src="/images/logo.svg"
                height={90}
                width={77}
                alt="Jeremy Hill logo"
              />{' '}
            </Link>
          </li>
          <li className="mx-4 hidden md:block">
            <Link href="https://www.instagram.com/jeremyhill83/">Photography</Link>
          </li>
          <li className="mx-4 hidden md:block">
            <Link href="https://github.com/Spifferiferfied">Code</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
