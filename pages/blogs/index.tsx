import { GetStaticProps } from "next"
import { fetchEntries } from "../../lib/contentful"
import safeJsonStringify from "safe-json-stringify"
import Header from "../../components/Header"
import BlogCard from "../../components/BlogCard"
import { TypePageBlogPostSkeleton } from "../../types/content-types"

export const getStaticProps: GetStaticProps = async () => {
  let posts = await fetchEntries()
  const stringifiedData = safeJsonStringify(posts)
  posts = JSON.parse(stringifiedData)
  return {
    props: {
      featuredPost: posts[0],
      posts: posts.slice(1),
    },
  }
}

export default function Blog({ posts, featuredPost }: { posts: TypePageBlogPostSkeleton[]; featuredPost: TypePageBlogPostSkeleton }) {
  return (
    <>
      <Header />
      <div className='max-w-7xl mx-auto space-y-5 px-5 pb-7' id='container'>
        <h1 className='text-3xl text-center'>Blogs</h1>

        {/* hero section for featured blog */}
        <div>
          <BlogCard post={featuredPost!} featured={true} />
        </div>

        {/* latest articles */}
        <h1 className='text-2xl'>Latest Articles: </h1>
        <div className='grid gap-7 sm:grid-cols-2 md:grid-cols-3 justify-center'>
          {posts.map((post) => (
            <BlogCard key={post.fields.slug} post={post} featured={false} />
          ))}
        </div>
      </div>
    </>
  )
}
