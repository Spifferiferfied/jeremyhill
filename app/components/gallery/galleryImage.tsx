'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { SanityGalleryImage } from '@/types/SanityGallery'
import { urlFor } from '@/lib/portableTextUtils'

export default function GalleryImage({ image }: { image: SanityGalleryImage }) {
  const ref = useRef<HTMLDialogElement>(null)
  const openDialog = () => {
    ref.current?.showModal()
  }
  const closeDialog = () => {
    ref.current?.close()
  }
  return (
    <>
      <Image
        src={ urlFor(image).height(300).quality(100).dpr(2).url() }
        alt={ image.alt }
        className={ `thumb p-2 md:max-h-[300px] block object-cover hover:brightness-50 hover:cursor-pointer ${ image.orientation === 'landscape' ? 'flex-1' : '' }` }
        height={ 500 }
        width={ 500 }
        onClick={ openDialog }
      />
      <dialog ref={ ref } className="fixed" onClick={ closeDialog }>
        <Image
          src={ urlFor(image).dpr(2).url() }
          alt={ image.alt }
          className="!relative max-h-[85vh]"
          width={ 2000 }
          height={ 2000 }
          style={ { width: 'auto', height: 'auto' } }
        />
        <figcaption className="absolute bottom-0 p-2">{ image.caption }</figcaption>
        <button className="close-btn absolute top-3 right-3 border-0 outline-none" type="button" onClick={ closeDialog }>close</button>
      </dialog>
    </>
  )
}
