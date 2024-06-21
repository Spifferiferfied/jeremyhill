import { BlogListProps, BlogListFilter } from '@/types/BlogListProps'
import { BlogPost } from '@/types/BlogPost'
import { getPosts } from '@/lib/sanityClient'

export default async function BlogList({ count = null, filter = {} as BlogListFilter }: BlogListProps) {
  const posts = await getPosts(count, filter) as Array<BlogPost>
  console.log(posts)

  return (
    <div className="w-full flex flex-col justify-items-start content-center flex-wrap">
      <ul />
    </div>
  )
}
