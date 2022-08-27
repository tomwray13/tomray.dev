import PageTitle from '@/components/PageTitle'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { ReactNode } from 'react'
import { PostFrontMatter } from 'types/PostFrontMatter'
import { Toc } from 'types/Toc'
import TOCSidebar from '@/components/TOCSidebar'
import {
  EmailIcon,
  EmailShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'next-share'
import Magnet from '@/components/Magnet'

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
          <header className="mx-auto max-w-2xl">
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
          <div className="pb-8  " style={{ gridTemplateRows: 'auto 1fr' }}>
            <div className="xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="lg:flex">
                <div className="prose mx-auto max-w-2xl pt-6 pb-8 dark:prose-dark">{children}</div>
                <div className="sticky top-0 hidden h-screen pt-6 pb-8 pl-6 lg:block xl:pl-10">
                  <TOCSidebar toc={toc} asDisclosure />
                  <div>
                    <h3 className="mb-2 font-bold">Share</h3>
                    <div className="space-x-2">
                      <TwitterShareButton url={url} title={h1}>
                        <TwitterIcon size={32} round id="social-twitter" />
                      </TwitterShareButton>
                      <RedditShareButton url={url} title={h1}>
                        <RedditIcon size={32} round id="social-reddit" />
                      </RedditShareButton>
                      <LinkedinShareButton url={url}>
                        <LinkedinIcon size={32} round id="social-linkedin" />
                      </LinkedinShareButton>
                      <EmailShareButton url={url} subject={'Next Share'} body="body">
                        <EmailIcon size={32} round id="social-email" />
                      </EmailShareButton>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto max-w-2xl">
                {/* <Magnet /> */}
                <Comments frontMatter={frontMatter} />
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
