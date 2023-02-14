import PageTitle from '@/components/PageTitle'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { ReactNode } from 'react'
import { PostFrontMatter } from 'types/PostFrontMatter'
import { Toc } from 'types/Toc'

interface Props {
  frontMatter: PostFrontMatter
  children: ReactNode
  next?: { slug: string; title: string }
  prev?: { slug: string; title: string }
  toc: Toc
}

export default function PostLayout({ frontMatter, children }: Props) {
  const { slug, lastmod, h1 } = frontMatter

  return (
    <div>
      <BlogSEO url={`${siteMetadata.siteUrl}/${slug}`} {...frontMatter} />
      <ScrollTopAndComment />
      <article className="mx-auto">
        <div>
          <header className="mx-auto max-w-2xl">
            <div className="text-center">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-normal mb-2 leading-6 text-gray-500 dark:text-gray-400">
                    Last updated: <time dateTime={lastmod}>{formatDate(lastmod)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{h1}</PageTitle>
              </div>
            </div>
          </header>
          <div className="pb-8  " style={{ gridTemplateRows: 'auto 1fr' }}>
            <div className="xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="lg:flex">
                <div className="prose mx-auto max-w-2xl pt-6 pb-8 dark:prose-dark">{children}</div>
              </div>
              <div className="mx-auto max-w-2xl">
                <Comments frontMatter={frontMatter} />
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
