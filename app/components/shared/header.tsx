'use client'

import Image from "next/image"
import { usePathname } from 'next/navigation'

export default function Header() {
  return (
    <header className={`flex flex-col items-center justify-between pt-7 border-b border-b-black font-heading container mx-auto`}>
      <nav className="w-full">
        <ul className="uppercase font-semibold flex flex-row justify-between">
          <li className="mx-4"><a className={usePathname() === "/about" ? 'active' : ''} href="/about">About</a></li>
          <li className="mx-4"><a className={usePathname() === "/blog" ? 'active' : ''} href="/blog">Musings</a></li>
          <li className="-mt-5"><a href="/"><Image className="-mb-5 bg-white px-3" src="/images/logo.svg" height={90} width={77} alt="Jeremy Hill logo" /> </a></li>
          <li className="mx-4"><a href="https://www.instagram.com/jeremyhill83/">Photography</a></li>
          <li className="mx-4"><a href="https://github.com/Spifferiferfied">Code</a></li>
        </ul>
      </nav>
    </header>
  )
}
