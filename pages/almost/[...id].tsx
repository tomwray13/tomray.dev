/* eslint-disable @next/next/no-img-element */
import { PageSEO } from '@/components/SEO'
import { GetStaticPropsContext } from 'next'

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
  const pages = [`nestjs-cheat-sheet`, `nestjs-first-principles`]
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
        isHiddenFromSearch
      />
      <div className="flex flex-col items-center">
        <img src="/static/gifs/mail.gif" alt="Check your email" className="-mb-8 h-64 dark:mb-8" />
        <h1 className="text-4xl">Check your email</h1>
        <p className=" max-w-lg text-center">
          If you can't see the email, please check your span/junk folder. Sometimes the email can
          end up there by mistake.
        </p>
      </div>
    </>
  )
}
