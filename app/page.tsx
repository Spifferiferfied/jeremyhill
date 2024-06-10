import Hero from "@/components/hero"
import BlogList from "./components/blog/blogList"

export default function Home() {
  return (
    <main className="container mx-auto w-full">
      <Hero />
      <BlogList count={ 4 }>
      </BlogList>
      <div className="text-center mb-6">
        <a href="/blog" className="btn">Load More</a>
      </div>
    </main>
  )
}
