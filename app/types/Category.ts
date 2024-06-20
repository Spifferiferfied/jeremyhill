import { Slug } from './SanityTypes'

export interface Category {
  title: string
  name: Slug
  description: string
  _ref?: string
  _type?: 'reference'
  _weak?: boolean
}
export interface TagProps {
  title: string
  name: string
  className?: string
}
