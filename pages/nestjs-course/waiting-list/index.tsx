/* eslint-disable @next/next/no-img-element */
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'

export default function NestJSCourse() {
  return (
    <>
      <PageSEO
        title="NestJS Course: You're on the waiting list!"
        description="You're on the waiting list for course: Learn NestJS by building projects"
        imageUrl="https://i.imgur.com/PIoMEsX.png"
        isHiddenFromSearch
      />
      <div>
        <div>
          <h3 className="polka full-screen mb-8">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 xl:px-0">
              <div className="py-14">
                <div>
                  <div>
                    <h1 className="mb-2 text-left text-3xl dark:text-gray-900">
                      🎉 You're on the waiting list!
                    </h1>
                  </div>
                  <div className="prose max-w-none text-gray-900 dark:text-gray-700">
                    <p>
                      Thank you for joining the waiting list. You'll receive bi-weekly updates from
                      me on the course progress. You can check out the full course history{' '}
                      <Link href="/nestjs-course/launch-updates">here</Link>. I'm currently on track
                      to launch the course in November 2023, but I'll keep you updated if that
                      changes!
                    </p>
                    <p>
                      If you have any specific requests for what you'd like to cover in the course,
                      reply to any of the emails I've sent you and I'll get back to you!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </h3>
        </div>
      </div>
    </>
  )
}
