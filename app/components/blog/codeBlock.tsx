'use client'

import { SanityCodeBlock } from '@/types/SanityTypes'
import Image from 'next/image'
import { MouseEventHandler } from 'react'
import { Refractor, registerLanguage } from 'react-refractor'
import javascript from 'refractor/lang/javascript'
import typescript from 'refractor/lang/typescript'
import sh from 'refractor/lang/shell-session'

registerLanguage(javascript)
registerLanguage(typescript)
registerLanguage(sh)

const copyToClipboard: MouseEventHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const content: HTMLElement = (e.target as HTMLElement)?.closest('div')?.querySelector('code') as HTMLElement
  navigator.clipboard.writeText(content.innerText)
}

export default function CodeBlock({ value }: { value: SanityCodeBlock }) {
  return (
    <>
      { value.filename && (<h3 className="font-semibold text-lg font-mono mt-8">{ value.filename }</h3>) }
      <div className="w-full block relative">
        <Refractor language={ value.language } value={ value.code } markers={ value.highlightedLines } />
        <button type="button" className="absolute right-4 top-4" onClick={ copyToClipboard }>
          <Image src="/images/icons/copy.svg" width="0" height="0" sizes="100vw" className="w-[24px] h-auto" alt="copy" />
        </button>
      </div>
    </>
  )
}
