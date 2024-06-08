/* eslint-disable @next/next/no-img-element */
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'
import TestimonialCard from '../../components/TestimonialCard'
import CountdownTimer from '../../components/CountdownTimer'
import FaqSection from '../../components/FaqSection'
import type { InferGetServerSidePropsType } from 'next'
import ProjectCards from '../../components/ProjectCards'
import CourseLastUpdatedAt from '../../components/CourseLastUpdatedAt'
import Pricing from '../../components/Pricing'

export const getServerSideProps = async (context) => {
  const { subscriber_id } = context.query
  if (!subscriber_id) {
    return {
      props: {
        deadline: null,
      },
    }
  }
  try {
    const protocol = context.req.headers['x-forwarded-proto'] || 'http'
    const host = context.req.headers.host
    const baseUrl = `${protocol}://${host}`
    const response = await fetch(`${baseUrl}/api/convertkit?subscriber_id=${subscriber_id}`)
    if (!response.ok) {
      return {
        props: {
          deadline: null,
        },
      }
    }
    const { subscriber } = await response.json()
    const createdAt = new Date(subscriber.created_at)
    createdAt.setDate(createdAt.getDate() + 9)
    const deadline = createdAt.toISOString()
    return {
      props: {
        deadline,
      },
    }
  } catch (error) {
    return {
      props: {
        deadline: null,
      },
    }
  }
}

export default function NestJSCourse({
  deadline,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const actualDeadline = new Date(deadline)
  return (
    <>
      <PageSEO
        title="NestJS Course: Learn By Building Projects"
        description="An immersive, hands-on course where you'll learn NestJS by building real-world projects from scratch, covering NestJS concepts and best practices."
        imageUrl="https://i.imgur.com/PIoMEsX.png"
      />
      <div className="pb-16">
        <div className="polka full-screen mb-8 text-center">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 xl:px-0">
            <div className="py-14">
              <div className="flex flex-col items-center">
                <img src="static/images/nestjs.png" alt="NestJS logo" className="mb-4 h-24" />
                <div>
                  <CourseLastUpdatedAt />
                  <h1 className="mt-4 mb-3 text-4xl dark:text-gray-900">
                    Learn NestJS by Building Real Projects
                  </h1>
                </div>
                <div className="prose mb-2 flex max-w-none flex-col items-center text-lg text-gray-900 dark:text-gray-700">
                  <p className="mb-0">
                    An immersive, hands-on video course where you'll learn NestJS by building
                    real-world projects from scratch, covering NestJS concepts and best practices.
                  </p>
                  {/* {deadline && <CountdownTimer targetDate={actualDeadline} />} */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="prose mx-auto max-w-2xl pt-6 dark:prose-dark">
          <h2 className="mb-2">🚀 Why take this course?</h2>
          <ul>
            <li>
              If you're building a side project on the side or looking to level up your skills, this
              course is for you.
            </li>
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

          <p>Here's what some fellow NestJS developers are saying about my content:</p>

          <div className="relative mt-8 md:-mx-16 lg:-mx-32 xl:-mx-40">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
              <TestimonialCard
                text="Really appreciate your content on NestJS. They are one of the best, cover alot and are easy to follow!"
                author="Martin"
                authorTitle="🇩🇪 Developer from Germany"
                authorImage="https://avatars.githubusercontent.com/u/46278653?v=4"
              />
              <TestimonialCard
                text="Big thanks for the comprehensive and easy to follow guide! Got the logs for our new app sorted in minutes! Cheers! 🙏"
                author="Joakim"
                authorTitle="🇸🇪 Developer from Sweden"
                authorImage="https://avatars.githubusercontent.com/u/1238405?v=4"
              />
              <TestimonialCard
                text="I just found your other article for NestJS + PostgreSQL! Solid content. Love how clear and simple it is."
                author="Martin"
                authorTitle="🇺🇸 Jay from USA"
                authorImage="https://avatars.githubusercontent.com/u/15197623?v=4"
              />
            </div>
          </div>

          <h2 className="mb-2">✍️ What projects are included in the course?</h2>
          <p>
            This course is project-based. See the list of projects and the respective name of the
            lessons in the course:
          </p>
          <div className="relative md:-mx-16 lg:-mx-40 xl:-mx-80">
            <ProjectCards />
          </div>

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

          <div className="relative md:-mx-16 lg:-mx-40 xl:-mx-80">
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-2">💰 How much does the course cost?</h2>
              <p>There are 2 pricing tiers available:</p>
            </div>
            <Pricing />
          </div>

          {/* <h2 className="mb-2">💰 How much will the course cost?</h2>
          <p>
            The course price is $299 USD, but you will have access to a 70% off discount code (i.e.
            meaning your course price is $89.70)
          </p> */}
          {/* <Pricing /> */}

          <h2 className="mb-2">🤓 Who is making this course?</h2>
          <p>
            👋 Hi! I'm <Link href="/about">Tom</Link>, a proud JS/TS dev from Brighton, UK. Through
            my blog, I've helped over 20,000 NestJS developers build cool projects and advance their
            careers. I'm also the creator of{' '}
            <Link href="/nestjs-fundamentals-course">NestJS Fundamentals</Link>, a free course
            that's been taken by over 1000s of developers.
          </p>
          <FaqSection />
        </div>
      </div>
    </>
  )
}
