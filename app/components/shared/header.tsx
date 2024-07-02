import Image from 'next/image'
import Link from 'next/link'
import HeaderLink from './headerLink'
import MobileNav from './mobileNav'

export default function Header() {
  return (
    <header
      className="flex flex-col items-center justify-between pt-7 border-b border-b-black font-heading container mx-auto h-20 md:h-auto"
    >
      <nav className="w-full">
        <MobileNav />
        <ul className="uppercase font-semibold flex flex-row justify-center content-center md:justify-between z-20 relative">
          <li className="mx-4 hidden md:block">
            <HeaderLink href="/about">About</HeaderLink>
          </li>
          <li className="mx-4 hidden md:block">
            <HeaderLink href="/blog">Musings</HeaderLink>
          </li>
          <li className="-mt-5">
            <Link href="/">
              <Image
                className="-mb-5 bg-white px-3"
                src="/images/logo.svg"
                height={ 90 }
                width={ 77 }
                alt="Jeremy Hill logo"
              />
              {' '}
            </Link>
          </li>
          <li className="mx-4 hidden md:block">
            <Link className="p-4 block" href="https://www.instagram.com/jeremyhill83/">Photography</Link>
          </li>
          <li className="mx-4 hidden md:block">
            <Link className="p-4 block" href="https://github.com/Spifferiferfied">Code</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
