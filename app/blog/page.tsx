import BlogList from "@/components/blog/blogList"

export default function Home() {
  return (
    <main className="container mx-auto w-full">
      <h1 className="text-center mt-6 mb-4 font-bold text-4xl font-heading">Musings</h1>
      <BlogList count={ 4 } />
    </main>
  )
}
