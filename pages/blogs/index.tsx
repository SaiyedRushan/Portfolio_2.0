import Link from "next/link"
import { GetStaticProps } from "next"
import { fetchEntries } from "../../lib/contentful"
import safeJsonStringify from "safe-json-stringify"
import Header from "../../components/Header"

export const getStaticProps: GetStaticProps = async () => {
  let posts = await fetchEntries()
  const stringifiedData = safeJsonStringify(posts)
  posts = JSON.parse(stringifiedData)
  return {
    props: {
      posts,
    },
  }
}

export default function Blog({ posts }: { posts: any[] }) {
  return (
    <>
      <Header />
      <h1 className='text-3xl text-center'>Blogs</h1>
      <div className='flex flex-col gap-3 items-center p-4'>
        <ul>
          {posts.map((post) => (
            <li key={post.fields.slug as string} className='my-5'>
              <h4>
                <Link href={`/blogs/${post.fields.slug}`}>{post.fields.title as string}</Link>
              </h4>
              <small>{post.fields.shortDescription as string}</small>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
