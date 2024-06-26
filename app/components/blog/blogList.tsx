import { BlogListProps, BlogListFilter } from '@/types/BlogListProps'
import { BlogPost } from '@/types/BlogPost'
import { getPosts } from '@/lib/sanityClient'
import BlogItem from './blogItem'

export default async function BlogList({ count = null, filter = {} as BlogListFilter }: BlogListProps) {
  const posts = await getPosts(count, filter) as Array<BlogPost>

  return (
    <div className="w-full flex flex-col justify-items-start content-center flex-wrap">
      <ul className="w-full">
        {posts.length > 0
        && posts.map((post: BlogPost, index: number) => (
          <BlogItem
            blogPost={ post as BlogPost }
            side={ index % 2 === 0 ? 'left' : 'right' }
            key={ post?.slug?.current }
          />
        ))}
      </ul>
    </div>
  )
}
