import { createClient } from "contentful"

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function fetchEntries() {
  try {
    let entries = await client.getEntries({
      content_type: "pageBlogPost",
      select: ["fields.title", "fields.slug", "fields.shortDescription", "fields.featuredImage", "fields.publishedDate", "fields.author"],
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for blog posts.`)
    return []
  } catch (error) {
    console.error(`Error fetching entries: ${error}`)
    return []
  }
}

export async function fetchEntry(slug) {
  try {
    const entries = await client.getEntries({
      content_type: "pageBlogPost",
      "fields.slug": slug,
      include: 10,
    })
    if (entries.items.length > 0) return entries.items[0]
    console.log(`Error getting Entries for blog post ${slug}.`)
    return undefined
  } catch (error) {
    console.error(`Error fetching entry: ${error}`)
    return undefined
  }
}
