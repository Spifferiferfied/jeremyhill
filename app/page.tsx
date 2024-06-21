import Hero from '@/components/hero'
import BlogList from './components/blog/blogList'

export default function Home() {
  return (
    <main className="container mx-auto w-full">
      <Hero />
      <BlogList count={ 4 } />
    </main>
  )
}
