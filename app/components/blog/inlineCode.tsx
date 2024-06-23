'use client'

import Image from 'next/image'
import { ReactNode, MouseEventHandler } from 'react'

const copyToClipboard: MouseEventHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const content: HTMLElement = (e.target as HTMLElement)?.closest('code')?.querySelector('.contents') as HTMLElement
  navigator.clipboard.writeText(content.innerText)
}

export default function inlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="w-full p-4 bg-grey-900 text-white block relative rounded">
      { children }
      <button type="button" className="absolute right-4 top-4" onClick={ copyToClipboard }>
        <Image src="/images/icons/copy.svg" width="0" height="0" sizes="100vw" className="w-[24px] h-auto" alt="copy" />
      </button>
    </code>
  )
}
