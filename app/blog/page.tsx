import BlogList from '@/components/blog/blogList'

export default function Blog() {
  return (
    <main className="container mx-auto w-full">
      <h1 className="text-center mt-6 mb-6 font-bold text-4xl font-heading">
        Musings
      </h1>
      <BlogList count={ 4 } />
    </main>
  )
}
