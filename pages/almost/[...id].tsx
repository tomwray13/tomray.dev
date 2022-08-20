import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import { formatSlug, getFiles } from '@/lib/mdx'
import { GetStaticPaths, GetStaticPropsContext } from 'next'

export async function getStaticPaths() {
  const pages = ['nestjs-tips']
  return {
    paths: pages.map((p) => {
      return {
        params: {
          id: [p],
        },
      }
    }),
    fallback: true,
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const pages = ['nestjs-tips']
  const isValidUrl = pages.includes(context.params.id[0])
  if (!isValidUrl) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}

export default function Almost() {
  return (
    <>
      <PageSEO
        title="Confirm your email address"
        description="Please confirm your email address"
        isHiddenFromSearchEngines
      />
      <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:px-6 md:text-8xl md:leading-14">
            Coming soon
          </h1>
        </div>
      </div>
    </>
  )
}
