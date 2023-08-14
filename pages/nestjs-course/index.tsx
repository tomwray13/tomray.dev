/* eslint-disable @next/next/no-img-element */
import ConvertKitForm from '@/components/ConvertKitForm'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'

export default function NestJSCourse() {
  return (
    <>
      <PageSEO
        title="NestJS Course: Learn By Building Projects"
        description="An immersive, hands-on course where you'll learn NestJS by building real-world projects from scratch, covering NestJS concepts and best practices."
        imageUrl="https://i.imgur.com/PIoMEsX.png"
      />
      <div>
        <div className="polka full-screen mb-8 text-center">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 xl:px-0">
            <div className="py-14">
              <div className="flex flex-col items-center">
                <img src="static/images/nestjs.png" alt="NestJS logo" className="mb-4 h-24" />
                <div>
                  <h1 className="mb-3 text-4xl dark:text-gray-900">
                    Learn NestJS by Building Real Projects
                  </h1>
                </div>
                <div className="prose mb-2 max-w-none text-lg text-gray-900 dark:text-gray-700">
                  <p>
                    An immersive, hands-on course where you'll learn NestJS by building real-world
                    projects from scratch, covering NestJS concepts and best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="prose mx-auto max-w-2xl pt-6 pb-8 dark:prose-dark">
          <h2 className="mb-2">💡 What you'll learn:</h2>
          <p>Through various projects, you'll learn the following techniques and concepts:</p>
          <ul>
            <li>
              Building a REST API with full CRUD functionality using NestJS Controllers, Middleware
              & Pipes
            </li>
            <li>Authentication, Authorization, Guards & Sessions</li>
            <li>Persisting data to a database and cache</li>
            <li>Processing jobs in a queue</li>
            <li>Unit testing, integration testing and end-to-end testing</li>
            <li>Realtime app using Websockets</li>
            <li>Fullstack monorepo</li>
            <li>All projects will include deployment</li>
          </ul>

          <h2 className="mb-2">🚀 Why take this course?</h2>
          <ul>
            <li>
              Accelerate your NestJS learning with real-world projects. You won't sit there watching
              hours of content without taking action - you'll be coding along and building real
              things!
            </li>
            <li>
              Gain hands-on experience you can apply directly to build your own software projects
              and advance your career.
            </li>
            <li>Learn best practices and advanced techniques used by NestJS pros.</li>
          </ul>

          <h2 className="mb-2">🤔 Who Should Take This Course?</h2>
          <ul>
            <li>
              Developers familiar with Node.js who want to learn NestJS and its associated
              ecosystem.
            </li>
            <li>
              Frontend developers who want to expand their skillset and learn how to build
              full-stack applications.
            </li>
            <li>
              Developers interested in building scalable and efficient backend applications using
              TypeScript.
            </li>
          </ul>

          <h2 className="mb-2">💰 How much will the course cost?</h2>
          <p>
            Everything I've shared before on my blog has always been for free and for the NestJS
            community. I can confirm, however, that this course will be a paid course. I'll be
            announcing the course price closer to launch (I haven't figured out yet how much it
            should be yet!).
          </p>

          <h2 className="mb-2">🤓 Who is making this course?</h2>
          <p>
            👋 Hi! I'm <Link href="/about">Tom</Link>, a proud JS/TS dev from Brighton, UK. Through
            my blog, I've helped over 20,000 NestJS developers build cool projects and advance their
            careers. I'm also the creator of{' '}
            <Link href="/nestjs-fundamentals-course">NestJS Fundamentals</Link>, a free course
            that's been taken by over 1000s of developers.
          </p>

          <h2 className="mb-2">🕰️ Join the waiting List</h2>
          <p>
            I'm currently working on the course (sharing regular course updates{' '}
            <Link href="/nestjs-course/launch-updates">here</Link>) and on schedule to launch in
            November 2023. Join the waiting list to get course updates and exclusive discounts when
            the course launches.
          </p>
          <ConvertKitForm formId="5405777" buttonText="Join Waiting List" />
          <p>
            In the meantime, if you're looking to learn some NestJS fundamentals, check out my{' '}
            <Link href="/nestjs-fundamentals-course">free course</Link> which is available right now
            🙃.
          </p>
        </div>
      </div>
    </>
  )
}
