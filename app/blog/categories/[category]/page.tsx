import BlogList from '@/components/blog/blogList'
import { client, getCategory } from '@/lib/sanityClient'

export async function generateStaticParams() {
  const paths = await client.fetch(
    `*[_type == "category" && defined(name.current)][].name.current`,
  )
  return paths.map((category: string) => ({ params: { category } }))
}

export default async function ByCategory({ params }: { params: { category: string } }) {
  const category = await getCategory(params.category)
  return (
    <main className="container mx-auto w-full">
      <h1 className="text-center mt-6 mb-6 font-bold text-4xl font-heading">
        Category:
        {' '}
        { category.title }
      </h1>
      <BlogList count={ 4 } filter={ { category: params.category } } />
    </main>
  )
}
