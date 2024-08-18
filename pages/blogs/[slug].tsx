import { GetStaticPaths, GetStaticProps } from "next"
import { fetchEntries, fetchEntry } from "../../lib/contentful"
import Head from "next/head"
import safeJsonStringify from "safe-json-stringify"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import Header from "../../components/Header"

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let post = await fetchEntry(params?.slug as string)
  const stringifiedData = safeJsonStringify(post!)
  post = JSON.parse(stringifiedData)
  return {
    props: {
      post: post!,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  let posts = await fetchEntries()
  const stringifiedData = safeJsonStringify(posts)
  posts = JSON.parse(stringifiedData)

  const paths = posts.map((post: any) => ({
    params: { slug: post.fields.slug as string },
  }))

  return {
    paths,
    fallback: false,
  }
}

function renderEntry(node: any) {
  if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
    return <iframe src={node.data.target.fields.embedUrl} height='100%' width='100%' title={node.data.target.fields.title} allowFullScreen={true} />
  } else if (node.data.target.sys.contentType.sys.id === "componentRichImage") {
    return (
      <div className='flex justify-center'>
        <img className='p-10' src={`https://${node.data.target.fields.image.fields?.file.url}`} height={node.data.target.fields.image.fields?.file.details.image.height} width={node.data.target.fields.image.fields?.file.details.image.width} alt={node.data.target.fields.image.fields.description} />
      </div>
    )
  }
}

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: renderEntry,
    [BLOCKS.EMBEDDED_RESOURCE]: renderEntry,
  },
}

interface PostProps {
  post: any
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Header />
      <div className='flex flex-col gap-3 items-center max-w-7xl mx-auto font-mono'>
        <Head>
          <title>{post.fields.title as string}</title>
        </Head>
        <h1 className='text-3xl'>{post.fields.title as string}</h1>
        <h2>{post.fields.author.fields.name as string}</h2>
        <p suppressHydrationWarning>{new Date(post.fields.publishedDate as string).toLocaleDateString()}</p>
        <p>{post.fields.shortDescription as string}</p>
        <img src={`https://${post.fields.featuredImage?.fields?.file?.url}`} className='h-[30vh]' />
        <div className='mx-5 my-2 text-lg' suppressHydrationWarning>
          {documentToReactComponents(post.fields.content as any, renderOptions)}
        </div>
      </div>
    </>
  )
}
