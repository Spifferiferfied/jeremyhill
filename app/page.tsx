import Hero from '@/components/hero'
import Link from 'next/link'
import BlogList from './components/blog/blogList'

export default function Home() {
  return (
    <main className="container mx-auto w-full">
      <Hero />
      <BlogList count={ 4 } />
      <div className="text-center mb-6">
        <Link className="p-4 no-underline text-white bg-red-600 hover:bg-red-900" href="/blog">Read More</Link>
      </div>
    </main>
  )
}
