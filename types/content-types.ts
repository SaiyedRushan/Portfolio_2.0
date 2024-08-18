import type { ChainModifiers, Entry, EntryFields, EntrySkeletonType, LocaleCode } from "contentful"

export interface TypeComponentAuthorFields {
  internalName: EntryFields.Symbol
  name: EntryFields.Symbol
  avatar?: EntryFields.AssetLink
}

export type TypeComponentAuthorSkeleton = EntrySkeletonType<TypeComponentAuthorFields, "componentAuthor">
export type TypeComponentAuthor<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentAuthorSkeleton, Modifiers, Locales>

export interface TypeComponentRichImageFields {
  internalName: EntryFields.Symbol
  image: EntryFields.AssetLink
  caption?: EntryFields.Symbol
  fullWidth?: EntryFields.Boolean
}

export type TypeComponentRichImageSkeleton = EntrySkeletonType<TypeComponentRichImageFields, "componentRichImage">
export type TypeComponentRichImage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentRichImageSkeleton, Modifiers, Locales>

export interface TypeComponentSeoFields {
  internalName: EntryFields.Symbol
  pageTitle: EntryFields.Symbol
  pageDescription?: EntryFields.Text
  canonicalUrl?: EntryFields.Symbol
  nofollow: EntryFields.Boolean
  noindex: EntryFields.Boolean
  shareImages?: EntryFields.Array<EntryFields.AssetLink>
}

export type TypeComponentSeoSkeleton = EntrySkeletonType<TypeComponentSeoFields, "componentSeo">
export type TypeComponentSeo<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentSeoSkeleton, Modifiers, Locales>

export interface TypePageBlogPostFields {
  internalName: EntryFields.Symbol
  seoFields?: EntryFields.EntryLink<TypeComponentSeoSkeleton>
  slug: EntryFields.Symbol
  author?: EntryFields.EntryLink<TypeComponentAuthorSkeleton>
  publishedDate: EntryFields.Date
  title: EntryFields.Symbol
  shortDescription?: EntryFields.Text
  featuredImage: EntryFields.AssetLink
  content: EntryFields.RichText
  relatedBlogPosts?: EntryFields.Array<EntryFields.EntryLink<TypePageBlogPostSkeleton>>
}

export type TypePageBlogPostSkeleton = EntrySkeletonType<TypePageBlogPostFields, "pageBlogPost">
export type TypePageBlogPost<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageBlogPostSkeleton, Modifiers, Locales>

export interface TypePageLandingFields {
  internalName: EntryFields.Symbol
  seoFields?: EntryFields.EntryLink<TypeComponentSeoSkeleton>
  featuredBlogPost?: EntryFields.EntryLink<TypePageBlogPostSkeleton>
}

export type TypePageLandingSkeleton = EntrySkeletonType<TypePageLandingFields, "pageLanding">
export type TypePageLanding<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageLandingSkeleton, Modifiers, Locales>
