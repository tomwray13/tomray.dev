import ConvertKitForm from '@/components/ConvertKitForm'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'

const MAX_DISPLAY = 150

export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[] }> = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <h3 className="polka full-screen mb-8">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 xl:px-0">
            <div className="py-14">
              <div>
                <div>
                  <h1 className="mb-2 text-left text-3xl dark:text-gray-900">
                    Learn NestJS Fundamentals
                  </h1>
                </div>
                <div className="prose max-w-none text-gray-900 dark:text-gray-700">
                  Want to use NestJS to it's full potential and understand how it really works?
                  Check out my free guide which covers concepts like TypeScript Classes, Dependency
                  Injection, IoC Containers and more:
                </div>
              </div>
              <ConvertKitForm />
            </div>
          </div>
        </h3>
      </div>
      <div className="flex justify-center">
        <ul className="max-w-2xl">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, lastmod, h1, summary } = frontMatter
            return (
              <li key={slug} className="py-8">
                <article>
                  <div className="xl:items-baseline xl:space-y-0">
                    <dl className="mb-2">
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-sm leading-6 text-gray-600 dark:text-slate-400 lg:right-full lg:mr-8 lg:whitespace-nowrap">
                        <time dateTime={lastmod}>{formatDate(lastmod)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link href={`/${slug}`} className="text-primary-500 dark:text-gray-100">
                              {h1}
                            </Link>
                          </h2>
                        </div>
                        <div className="prose max-w-none text-gray-600 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/${slug}`}
                          className="group inline-flex h-9 items-center whitespace-nowrap rounded-full bg-slate-100 px-3 text-sm font-semibold text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500"
                          aria-label={`Read "${h1}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
