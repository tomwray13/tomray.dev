/* eslint-disable @next/next/no-img-element */
import { PageSEO } from '@/components/SEO'
import { SUCCESS_PAGES } from '@/data/contants'
import { GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { Pirsch } from 'pirsch-sdk/web'
import { useEffect } from 'react'

export async function getStaticPaths() {
  return {
    paths: SUCCESS_PAGES.map((p) => {
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
  const isValidUrl = SUCCESS_PAGES.includes(context.params.id[0])
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

const pirschCall = async (value: string) => {
  const client = new Pirsch({
    identificationCode: process.env.PIRSCH,
  })
  await client.event(`email-opt-in`, 0, { resource: value })
}

export default function Almost() {
  const router = useRouter()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { id } = router.query
      pirschCall(id[0])
      router.push(`/resources/${id[0]}`)
    }
  })
  return (
    <>
      <PageSEO title="Loading..." description="Loading up resource." isHiddenFromSearch />
      <div className="flex flex-col items-center">
        <img src="/static/icons/tail-spin.svg" alt="NestJS logo" className="mb-16 h-32" />
        <h1 className="text-4xl">Loading...</h1>
      </div>
    </>
  )
}
