/* eslint-disable @next/next/no-img-element */
import { PageSEO } from '@/components/SEO'
import { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'

export async function getStaticPaths() {
  const pages = ['nestjs-cheat-sheet']
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
  const pages = ['nestjs-cheat-sheet']
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
  const router = useRouter()
  if (typeof window !== 'undefined') {
    const { id } = router.query
    router.push(`/resource/${id[0]}`)
  }
  return (
    <>
      <PageSEO title="Loading..." description="Loading up resource." isHiddenFromSearchEngines />
      <div className="flex flex-col items-center">
        <img src="/static/icons/tail-spin.svg" alt="NestJS logo" className="mb-16 h-32" />
        <h1 className="text-4xl">Loading...</h1>
      </div>
    </>
  )
}
