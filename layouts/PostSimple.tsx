import PageTitle from '@/components/PageTitle'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { ReactNode } from 'react'
import { PostFrontMatter } from 'types/PostFrontMatter'

interface Props {
  frontMatter: PostFrontMatter
  children: ReactNode
  next?: { slug: string; title: string }
  prev?: { slug: string; title: string }
}

export default function PostLayout({ frontMatter, children }: Props) {
  const { slug, lastmod, h1 } = frontMatter

  return (
    <div>
      <BlogSEO url={`${siteMetadata.siteUrl}/${slug}`} {...frontMatter} />
      <ScrollTopAndComment />
      <article className="mx-auto max-w-2xl">
        <div>
          <header>
            <div className="text-center">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="mb-2 text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
                    Last updated: <time dateTime={lastmod}>{formatDate(lastmod)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{h1}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-6 pb-8 dark:prose-dark md:pt-8">{children}</div>
            </div>
            <Comments frontMatter={frontMatter} />
          </div>
        </div>
      </article>
    </div>
  )
}
