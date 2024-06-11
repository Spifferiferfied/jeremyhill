// client.ts
import { createClient } from '@sanity/client'
import groq from 'groq'

export const client = createClient({
  projectId: process.env.SANITY_API_PROJECT_ID,
  dataset: process.env.SANITY_API_DATASET || 'development',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-06-07', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_API_WRITE_TOKEN // Only if you want to update content with the client
})


export const getPost = async ( slug : String ) => {
  const post = await client.fetch(groq`
    *[_type == "post" && slug.current == $slug][0]{ title, "tags": categories[]->title, mainImage, body, "date": _createdAt }
  `, { slug })

  return post
}

export const getPage = async ( slug : String ) => {
  const page = await client.fetch(groq`
    *[_type == "page" && slug.current == $slug][0]{ title, body, "date": _createdAt }
  `, { slug })

  return page
}

export const getPosts = async ( count = 4 ) => {
  const posts = await client.fetch(groq`
    *[_type == "post"][0..${ count - 1 }] | order(publishedAt desc){ slug, title, "tag": categories[0]->title, blurb, mainImage }
  `)
  return posts
}
