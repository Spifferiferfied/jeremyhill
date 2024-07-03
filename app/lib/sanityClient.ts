// client.ts
import { createClient } from '@sanity/client'
import { BlogListFilter } from '@/types/BlogListProps'
import groq from 'groq'
import { BlogPost } from '@/types/BlogPost'
import { SanityGallery } from '@/types/SanityGallery'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'development',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-06-07', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_API_WRITE_TOKEN // Only if you want to update content with the client
})

export const getPost = async (slug: string) => {
  const post = await client.fetch<BlogPost>(
    groq`
    *[_type == "post" && slug.current == $slug][0]
    {
    title,
    "category": category->,
    "subCategories": subCategories[]->,
    mainImage,
    body[]{
      _type == 'gallery' => @->,
      _type != 'gallery' => @,
    },
    "date": publishedAt
    }`,
    { slug },
    {
      next: { tags: ['post'] },
    },
  )

  return post
}

export const getGallery = async (slug: string) => {
  const post = await client.fetch<SanityGallery>(
    groq`
    *[_type == "gallery" && slug.current == $slug][0]
    {
    title,
    "category": category->,
    "subCategories": subCategories[]->,
    images[],
    description,
    "date": publishedAt
    }`,
    { slug },
    {
      next: { tags: ['gallery'] },
    },
  )

  return post
}

export const getPage = async (slug: string) => {
  const page = await client.fetch(
    groq`
    *[_type == "page" && slug.current == $slug][0]{ title, body, "date": _createdAt }`,
    { slug },
    {
      next: { tags: ['page'] },
    },
  )

  return page
}
export const getCategory = async (name: string) => {
  const page = await client.fetch(
    groq`
    *[_type == "category" && name.current == $name][0]`,
    { name },
    {
      next: { tags: ['post', 'category'] },
    },
  )

  return page
}

export const getPosts = async (count: number | null, filter = { } as BlogListFilter) => {
  let filterString = ''
  let params = { }
  let countString = ''
  if (filter?.category) {
    filterString += groq`&& ($category == category->name.current || $category in subCategories[]->name.current)`
    params = { category: filter?.category }
  }
  if (count) {
    countString = `[${ filter?.page ? filter.page * count : 0 }..${ filter?.page ? (filter.page + 1) * count : count - 1 }]`
  }
  const query = groq`*[_type == "post"
    ${ filterString }]
    ${ countString }
    | order(publishedAt desc)
    {
      slug,
      title,
      "category": category->,
      blurb,
      mainImage
    }`

  const posts = await client.fetch(
    query,
    params,
    {
      next: { tags: ['post'] },
    },
  )

  return posts
}
