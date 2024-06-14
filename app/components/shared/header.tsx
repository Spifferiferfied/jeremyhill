'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  return (
    <header
      className={`flex flex-col items-center justify-between pt-7 border-b border-b-black font-heading container mx-auto`}
    >
      <nav className="w-full">
        <ul className="uppercase font-semibold flex flex-row justify-between">
          <li className="mx-4">
            <Link
              className={usePathname() === '/about' ? 'active' : ''}
              href="/about"
            >
              About
            </Link>
          </li>
          <li className="mx-4">
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
          <li className="mx-4">
            <Link href="https://www.instagram.com/jeremyhill83/">Photography</Link>
          </li>
          <li className="mx-4">
            <Link href="https://github.com/Spifferiferfied">Code</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
