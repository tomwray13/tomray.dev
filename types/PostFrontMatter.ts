export type PostFrontMatter = {
  title: string
  h1: string
  date: string // published at
  lastmod?: string // updated at
  tags: string[]
  draft?: boolean
  summary?: string
  images?: string[]
  authors?: string[]
  layout?: string
  canonicalUrl?: string
  slug: string
  fileName: string
  isHiddenFromSearch?: boolean
}
