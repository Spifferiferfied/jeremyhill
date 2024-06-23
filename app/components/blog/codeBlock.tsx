'use client'

import { SanityCodeBlock } from '@/types/SanityTypes'
import Image from 'next/image'
import { MouseEventHandler } from 'react'
import { Refractor, registerLanguage } from 'react-refractor'
import javascript from 'refractor/lang/javascript'

registerLanguage(javascript)

const copyToClipboard: MouseEventHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const content: HTMLElement = (e.target as HTMLElement)?.closest('div')?.querySelector('code') as HTMLElement
  navigator.clipboard.writeText(content.innerText)
}

export default function CodeBlock({ value }: { value: SanityCodeBlock }) {
  return (
    <div className="w-full block relative">
      <Refractor language={ value.language } value={ value.code } markers={ value.highlightedLines } />
      <button type="button" className="absolute right-4 top-4" onClick={ copyToClipboard }>
        <Image src="/images/icons/copy.svg" width="0" height="0" sizes="100vw" className="w-[24px] h-auto" alt="copy" />
      </button>
    </div>
  )
}
