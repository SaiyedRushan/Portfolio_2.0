import React from "react"
import Link from "next/link"
import { TypePageBlogPostSkeleton } from "../types/content-types"

function BlogCard({ post, featured }: { post: TypePageBlogPostSkeleton; featured?: boolean }) {
  console.log(post)
  return (
    <Link href={`/blogs/${post.fields.slug}`}>
      <div className={`rounded-lg  overflow-clip bg-zinc-900 text-white flex flex-col ${featured ? "justify-between sm:flex-row" : ""} space-y-3`}>
        <img src={`https://${post.fields.featuredImage?.fields?.file?.url}`} className='max-w-sm' />

        <div className='p-4 flex flex-col space-y-2 justify-center mx-auto'>
          <h3 className={`text-xl font-semibold ${featured ? "sm:text-4xl" : ""}`}>{post.fields.title}</h3>

          <div className='flex justify-between text-sm items-center'>
            <div className='flex space-x-2'>
              {/*@ts-ignore*/}
              <img src={`https://${post.fields.author?.fields?.avatar?.fields?.file?.url}`} className='w-6 h-6 rounded-full' />
              <span>{post.fields.author?.fields?.name.toString()}</span>
            </div>
            <span>{post.fields.publishedDate}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
