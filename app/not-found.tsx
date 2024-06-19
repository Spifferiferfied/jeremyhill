import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="container mx-auto w-full">
      <h1 className="text-center mt-8 mb-6 font-bold text-4xl font-heading">404 Not Found</h1>
      <div className="md:w-1/2 md:px-0 px-4 text-center mx-auto mb-6">
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </main>
  )
}
