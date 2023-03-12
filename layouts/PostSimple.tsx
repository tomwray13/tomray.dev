import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { ReactNode } from 'react'
import { PostFrontMatter } from 'types/PostFrontMatter'
import { Toc } from 'types/Toc'
import TOCSidebar from '@/components/TOCSidebar'
import Magnet from '@/components/Magnet'
import ConvertKitForm from '@/components/ConvertKitForm'
import Link from 'next/link'
import PopularArticles from '@/components/PopularArticles'

interface Props {
  frontMatter: PostFrontMatter
  children: ReactNode
  next?: { slug: string; title: string }
  prev?: { slug: string; title: string }
  toc: Toc
}

export default function PostLayout({ frontMatter, children, toc }: Props) {
  const { slug, lastmod, h1 } = frontMatter
  const url = `${siteMetadata.siteUrl}/${slug}`

  return (
    <div>
      <BlogSEO url={url} {...frontMatter} />
      <ScrollTopAndComment />
      <article className="mx-auto">
        <div>
          <div className="pb-8  " style={{ gridTemplateRows: 'auto 1fr' }}>
            <div className="xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="lg:flex">
                <div className="prose mx-auto max-w-2xl pt-6 pb-8 dark:prose-dark">
                  <header className="mb-8">
                    <dl>
                      <div>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-normal mb-2 leading-6 text-gray-500 dark:text-gray-400">
                          Last updated: <time dateTime={lastmod}>{formatDate(lastmod)}</time>
                        </dd>
                      </div>
                    </dl>
                    <h1 className="mb-4 text-left text-4xl text-gray-900 sm:text-5xl sm:font-extrabold">
                      {h1}
                    </h1>
                  </header>
                  <div>{children}</div>
                </div>
                <div className="sticky top-0 hidden h-screen pt-6 pb-8 pl-6 lg:block xl:pl-16">
                  <TOCSidebar toc={toc} asDisclosure />
                  <PopularArticles currentPath={slug} />
                  {/* <div>
                    <h3 className="mb-1 font-bold">Learn NestJS Fundamentals</h3>
                    <p className="text-sm leading-6 text-gray-600">
                      Want to use NestJS to it's full potential and understand how it really works?
                      Check out my free guide which covers concepts like Dependency Injection, IoC
                      Containers and more:
                    </p>
                    <ConvertKitForm buttonText="Get free guide" sideForm={false} />
                  </div> */}
                </div>
              </div>
              <div className="mx-auto max-w-2xl">
                <Magnet />
                {/* <Comments frontMatter={frontMatter} /> */}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
