import { Category } from './Category'
import { BlockContent, SanityImageCrop, SanityImageHotspot, Slug, internalGroqTypeReferenceTo } from './SanityTypes'

export interface SanityGalleryImage {
  _id: string
  _type: 'image'
  _createdAt: string
  _updatedAt: string
  _rev: string
  _key?: string
  asset?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
  }
  hotspot?: SanityImageHotspot
  crop?: SanityImageCrop
  alt: string
  caption?: string
  orientation: string
}
export interface SanityGallery {
  _id: string
  _type: 'gallery'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title: string
  slug: Slug
  galleryImages: Array<SanityGalleryImage>
  category: Category
  subCategories: Array<Category>
  date?: string
  publishedAt?: string
  description?: BlockContent
  blurb?: BlockContent
}
