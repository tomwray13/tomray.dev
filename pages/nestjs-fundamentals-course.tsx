/* eslint-disable @next/next/no-img-element */
import ConvertKitForm from '@/components/ConvertKitForm'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'

export default function NestJSCourse() {
  return (
    <>
      <PageSEO
        title="NestJS Fundamentals Course"
        description="A NestJS course that covers key concepts like TypeScript Classes, Dependency Injection, IoC Containers and more."
      />
      <div>
        <div className="polka full-screen mb-8 text-center">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 xl:px-0">
            <div className="py-14">
              <div className="flex flex-col items-center">
                <img src="static/images/nestjs.png" alt="NestJS logo" className="mb-4 h-24" />
                <div>
                  <h1 className="mb-2 text-4xl dark:text-gray-900">
                    Learn NestJS From The Ground Up
                  </h1>
                </div>
                <div className="prose mb-2 max-w-none text-lg text-gray-900 dark:text-gray-700">
                  A (free) NestJS email course that covers key concepts like TypeScript Classes,
                  Dependency Injection, IoC Containers and more.
                </div>
                <ConvertKitForm buttonText="Get Free Course" />
              </div>
            </div>
          </div>
        </div>
        <div className="prose mx-auto max-w-2xl pt-6 pb-8 dark:prose-dark">
          <p>Hey there! Thanks for checking out my free NestJS fundamentals course.</p>

          <h2>What you'll learn:</h2>
          <ul>
            <li>An overview of TypeScript Classes and the parts most relevant to NestJS</li>
            <li>
              What Dependency Injection & IoC Containers are, why they're important and plenty of
              code examples to understand their importance in the NestJS ecosystem
            </li>
            <li>
              Piece together the concepts mentioned above to understand how the NestJS DI container
              works.
            </li>
          </ul>

          <h2>Who is making this course?</h2>
          <p>
            👋 Hi! I'm <Link href="/about">Tom</Link>, a proud JS/TS dev from Brighton, UK. Through
            my blog, I've helped over 20,000 NestJS developers learn through building cool projects
            and practical tutorials.
          </p>

          <h2>Get the free course</h2>
          <p>
            This is a 3-part email course that will be delivered to your inbox over the next 3 days.
            You'll get the first part immediately after signing up.
          </p>
          <ConvertKitForm buttonText="Get Free Course" />
        </div>
      </div>
    </>
  )
}
