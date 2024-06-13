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
    const currentDateTime = new Date()
    const deadline = createdAt > currentDateTime ? createdAt.toISOString() : null
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
  const actualDeadline = deadline ? new Date(deadline) : null
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
                    Master NestJS by Building Real-World Projects
                  </h1>
                </div>
                <div className="prose mb-2 flex max-w-none flex-col items-center text-lg text-gray-900 dark:text-gray-700">
                  <p className="mb-4">
                    Learn the skills to build scalable, efficient, and powerful backend applications
                    with NestJS through hands-on, project-based learning.
                  </p>
                  {actualDeadline && <CountdownTimer targetDate={actualDeadline} />}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="prose mx-auto max-w-2xl dark:prose-dark">
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
                author="Jay"
                authorTitle="🇺🇸 Developer from USA"
                authorImage="https://avatars.githubusercontent.com/u/15197623?v=4"
              />
            </div>
          </div>
          <h2 className="mb-2">Let's face it - Learning NestJS is hard 🤦‍♂️</h2>
          <p>
            NestJS has emerged as a go-to framework for building scalable and efficient server-side
            applications. Many job postings now list NestJS as a desired skill for backend
            developers.
          </p>
          <p>
            However, if you've attempted to learn NestJS on your own, you might have found it
            overwhelming. There are numerous concepts to grasp, and many tutorials assume a
            significant amount of prior knowledge and experience.
          </p>
          <img src="https://i.imgflip.com/8tqoso.jpg" alt="old man meme" />
          <p>
            Perhaps you've found yourself trapped in tutorial hell, going through countless
            tutorials without making concrete progress.
          </p>
          <p>You're eager to learn NestJS, but the journey hasn't been smooth. 😕</p>
          <h2 className="mb-2">I'm here to help 🫡</h2>
          <p>
            Over the past year, I've been developing the ultimate project-focused NestJS course.
          </p>
          <p>
            You won't simply watch me code passively. The course is packed with practical exercises,
            real-world inspired projects, and engaging coding challenges. It's a unique learning
            experience tailored specifically for NestJS enthusiasts.
          </p>
          <p>
            We'll learn NestJS from the ground up, constructing a solid foundation and mental model
            that will enable you to understand NestJS and tackle complex problems effectively.
          </p>
          <img src="https://i.imgflip.com/8tqpny.jpg" alt="yoda meme" />
          <p>
            I'll share the numerous insights and best practices I've gained from years of
            professional NestJS development.
          </p>
          <p>
            But we won't stop at NestJS alone. The course covers wider server side development
            concepts like working with asynchronous queues, handling errors, and writing tests.
          </p>
          <h2 className="mb-2">The truth is, NestJS is awesome 🙌</h2>
          <p>
            Once you grasp the core concepts, NestJS becomes a powerful ally in your backend
            development journey. I've worked with various server-side frameworks, and NestJS stands
            out for its ability to boost productivity and maintainability.
          </p>
          <p>
            Building scalable and robust backend applications is no simple feat. It requires careful
            consideration of performance, security, and architecture.
          </p>
          <p>
            To truly harness the power of NestJS, we first need to establish a strong foundation and
            understand the conventions and patterns that make NestJS so effective. Then, we'll
            explore how leveraging the right tools and techniques can supercharge our NestJS
            development.
          </p>
          <p>
            This is the path to becoming a confident and proficient NestJS developer. It's a
            rewarding experience, and I want to guide you along the way.
          </p>
          <p>
            Let me show you how this course will make your learning journey enjoyable and
            transformative.
          </p>
          <h2 className="mb-2">💡 What you'll learn:</h2>
          <p>
            Through various projects and video-based lessons, you'll learn the following techniques
            and concepts:
          </p>
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

          <h2 className="mb-2">✍️ What projects are included in the course?</h2>
          <p>
            This course is project-based. See the list of projects and the respective name of the
            lessons in the course:
          </p>
          <div className="relative md:-mx-16 lg:-mx-40 xl:-mx-80">
            <ProjectCards />
          </div>

          <div id="pricing" className="relative md:-mx-16 lg:-mx-40 xl:-mx-80">
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-2">💰 How much does the course cost?</h2>
              <p>There are 2 pricing tiers available:</p>
            </div>
            <Pricing deadline={actualDeadline} />
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
