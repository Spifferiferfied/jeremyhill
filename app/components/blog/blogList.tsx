import {BlogItem } from "./blogItem"
import { BlogListProps } from "@/types/BlogListProps"
import { BlogPost } from "@/types/BlogPost"
import { getPosts } from "@/lib/sanityClient"

export default async function BlogList({ count = 4 }: BlogListProps) {
  const posts = await getPosts( count )

  return (
    <div className="w-full flex flex-col justify-items-start content-center flex-wrap">
      <ul>
        { posts.length > 0 && posts.map(
          (post: BlogPost, index: number) => {
            return ( <BlogItem blogPost={ post as BlogPost } side={ index % 2 == 0 ? 'left': 'right' } key={ post.slug }/> )
          })
        }
      </ul>
    </div>
  )
}
