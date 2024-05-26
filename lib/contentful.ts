import { AddChainModifier, Asset, AssetFields, ContentfulClientApi, Entry, EntryCollection, EntryFieldTypes, EntrySkeletonType, ResolvedAssetLink, createClient } from "contentful"

const client: ContentfulClientApi<undefined> = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
})

export interface BlogPostFields extends EntrySkeletonType {
  contentTypeId: "pageBlogPost"
  fields: {
    title: EntryFieldTypes.Symbol
    slug: EntryFieldTypes.Symbol
    shortDescription: EntryFieldTypes.Text
    content: EntryFieldTypes.RichText
    featuredImage: any
    publishedDate: EntryFieldTypes.Date
  }
}

export interface BlogPostFieldsShort extends EntrySkeletonType {
  contentTypeId: "pageBlogPost"
  fields: {
    title: EntryFieldTypes.Symbol
    slug: EntryFieldTypes.Symbol
    shortDescription: EntryFieldTypes.Text
  }
}

export type BlogPost = Entry<BlogPostFields>
export type BlogPostShort = Entry<BlogPostFieldsShort>

export async function fetchEntries(): Promise<BlogPostShort[]> {
  let entries: EntryCollection<BlogPostFieldsShort> = await client.getEntries({
    content_type: "pageBlogPost",
    select: ["fields.title", "fields.slug", "fields.shortDescription"],
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for blog posts.`)
  return []
}

export async function fetchEntry(slug: string): Promise<BlogPost | undefined> {
  const entries: EntryCollection<BlogPostFields> = await client.getEntries({
    content_type: "pageBlogPost",
    "fields.slug": slug,
    include: 10,
  })
  if (entries.items.length > 0) return entries.items[0] as BlogPost
  console.log(`Error getting Entries for blog post ${slug}.`)
  return undefined
}
