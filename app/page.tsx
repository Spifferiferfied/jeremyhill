import Hero from '@/components/hero'
import BlogList from './components/blog/blogList'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="container mx-auto w-full">
      <Hero />
      <BlogList count={ 4 }></BlogList>
      <div className="text-center mb-6">
        <Link href="/blog" className="btn">
          Read More
        </Link>
      </div>
    </main>
  )
}
