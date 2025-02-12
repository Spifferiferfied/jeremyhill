'use client'

import { useRef, useState, KeyboardEvent, useEffect } from 'react'
import Image from 'next/image'
import { SanityGalleryImage } from '@/types/SanityGallery'
import { urlFor } from '@/lib/portableTextUtils'

async function getImageDataUrl(imageUrl: string) {
  const response = await fetch(imageUrl)
  const blob = await response.blob()
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}

export default function GalleryImage({ image }: { image: SanityGalleryImage }) {
  const [dataUrlThumb, setDataUrlThumb] = useState('')
  const [dataUrlFull, setDataUrlFull] = useState('')
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    async function fetchDataUrl() {
      const thumbResult = await getImageDataUrl(urlFor(image).height(300).quality(100).dpr(2).url())
      const fullResult = await getImageDataUrl(urlFor(image).dpr(2).url())
      setDataUrlThumb(thumbResult as string)
      setDataUrlFull(fullResult as string)
    }
    fetchDataUrl()
  })

  const openDialog = () => {
    ref.current?.showModal()
  }
  const closeDialog = () => {
    ref.current?.close()
  }
  const dialogEnter = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      closeDialog()
    }
  }
  return (
    <>
      <Image
        src={ dataUrlThumb }
        alt={ image.alt }
        className={ `thumb p-2 md:max-h-[300px] block object-cover hover:brightness-50 hover:cursor-pointer ${ image.orientation === 'landscape' ? 'flex-1' : '' }` }
        height={ 500 }
        width={ 500 }
        onClick={ openDialog }
      />
      <div onClick={ closeDialog } onKeyDown={ dialogEnter } role="presentation">
        <dialog ref={ ref } className="fixed">
          <Image
            src={ dataUrlFull }
            alt={ image.alt }
            className="!relative max-h-[85vh]"
            width={ 2000 }
            height={ 2000 }
            style={ { width: 'auto', height: 'auto' } }
            priority
          />
          <figcaption className="absolute bottom-0 p-2 bg-opacity-25 bg-black text-white">{ image.caption }</figcaption>
          <button className="close-btn absolute top-3 right-3 border-0 outline-none" type="button" onClick={ closeDialog }>close</button>
        </dialog>
      </div>
    </>
  )
}
