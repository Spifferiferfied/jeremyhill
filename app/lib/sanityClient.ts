// client.ts
import { createClient } from '@sanity/client'
import { BlogListFilter } from '@/types/BlogListProps'
import { BlogPost } from '@/types/BlogPost'
import groq from 'groq'

export const client = createClient({
  projectId: process.env.SANITY_API_PROJECT_ID,
  dataset: process.env.SANITY_API_DATASET || 'development',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-06-07', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_API_WRITE_TOKEN // Only if you want to update content with the client
})

export const getPost = async (slug: String) => {
  const post = await client.fetch(
    groq`
    *[_type == "post" && slug.current == $slug][0]
    {
    title,
    "category": category->,
    "subCategories": subCategories[]->,
    mainImage,
    body,
    "date": _createdAt
    }`,
    { slug },
  )

  return post
}

export const getPage = async (slug: String) => {
  const page = await client.fetch(
    groq`
    *[_type == "page" && slug.current == $slug][0]{ title, body, "date": _createdAt }`,
    { slug },
  )

  return page
}
export const getCategory = async (name: String) => {
  const page = await client.fetch(
    groq`
    *[_type == "category" && name.current == $name][0]`,
    { name },
  )

  return page
}

export const getPosts = async (count = 4, filter = { } as BlogListFilter) => {
  let filterString = ''
  let params = { }
  if( filter?.category ) {
    filterString += groq`&& ($category == category->name.current || $category in subCategories[]->name.current)`
    params = { category: filter?.category }
  }
  const query = groq`*[_type == "post"
  ${filterString}]
  [${filter?.page ? filter.page * count : 0}..${filter?.page ? (filter.page + 1) * count : count - 1}]
   | order(publishedAt desc)
   { slug,
    title,
    "category": category->,
    blurb,
    mainImage }`
  const posts = await client.fetch( query, params, )
  return posts
}
