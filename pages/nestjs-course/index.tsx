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
    createdAt.setDate(createdAt.getDate() + 7)
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
          <div className="mx-auto max-w-3xl px-4 pb-6 sm:px-6 xl:px-0">
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
                    Future-proof your career and increase your earning potential by following a
                    comprehensive video-based course that ensures you master NestJS fundamentals and
                    advanced concepts (even if you're new to backend development).
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
            applications.
          </p>
          <p>Many job postings now list NestJS as a desired skill for backend developers.</p>
          <p>
            However, if you've attempted to learn NestJS on your own, you might have found it
            overwhelming.
          </p>
          <p>
            There are numerous concepts to grasp (like dependency injection, OOP and decorators) and
            many tutorials assume a significant amount of prior knowledge and experience.
          </p>
          <img src="https://i.imgflip.com/8tqoso.jpg" alt="old man meme" />
          <p>
            Perhaps you've found yourself trapped in tutorial hell, going through countless
            tutorials without making concrete progress.
          </p>
          <p>You're eager to learn NestJS, but the journey hasn't been smooth. 😕</p>
          <h2 className="mb-2">What if you had a roadmap to NestJS mastery 🧙‍♀️?</h2>
          <p>
            Over the past year, I've been developing the ultimate project-focused NestJS course.
          </p>
          <p>
            I’ve spent literally hundreds of hours thinking about the best way to structure a
            learning path that is focused on first principles.
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
            I'll share many insights and best practices I've gained from years of professional
            NestJS development.
          </p>
          <p>
            But we won't stop at NestJS alone. The course covers wider server side development
            concepts like working with asynchronous queues, handling errors, and writing tests.
          </p>
          <h2 className="mb-2">Your future as a NestJS pro ⚡️</h2>
          <p>
            Imagine being able to confidently build and deploy scalable, high-performance backend
            applications using NestJS.
          </p>
          <p>
            Picture yourself taking on more complex projects, impressing colleagues and clients as
            well as increasing your earning potential.
          </p>
          <p>
            With the right guidance and structured learning, you can achieve this in just 30 days.
          </p>
          <p>
            No more piecing together scattered tutorials or feeling overwhelmed by new concepts.
          </p>
          <p>
            By dedicating yourself to a comprehensive, project-based learning experience, you can
            rapidly gain the skills and confidence to succeed as a NestJS developer 🚀.
          </p>
          <h2 className="mb-2">Here’s exactly what you’ll learn 📚</h2>
          <p>
            Through various projects and video-based lessons, you'll learn the following techniques
            and concepts:
          </p>
          <ul>
            <li>
              <strong>NestJS Fundamentals:</strong> Gain a solid foundation in NestJS concepts,
              architecture, and best practices. Learn how to set up a development environment,
              create modules, controllers, and services, and understand the core building blocks of
              a NestJS application.
            </li>
            <li>
              <strong>Database Integration:</strong> Master the skills needed to persist data to a
              database and cache that seamlessly integrates into your NestJS code
            </li>
            <li>
              <strong>Authentication and Authorization:</strong> Implement secure authentication and
              authorization mechanisms in your NestJS applications.
            </li>
            <li>
              <strong>Real-World Projects:</strong> Apply your knowledge by building real-world
              projects that solve common backend challenges. Building a REST API with full CRUD
              functionality using NestJS Controllers, Middleware & Pipes
            </li>
            <li>
              <strong>Queues:</strong> You’ll learn all about setting up queues to handle
              asynchronous operations like uploading files
            </li>
            <li>
              <strong>Testing and Deployment:</strong> Learn best practices for testing your NestJS
              applications using tools like Jest and Supertest. Unit testing, integration testing &
              e2e testing are extensively covered!
            </li>
            <li>
              <strong>CI/CD:</strong> Get familiar with working on production-grade projects by
              setting up CI/CD automation using Github Actions
            </li>
          </ul>
          <p>
            By following this comprehensive curriculum, you'll gain the skills and confidence to
            tackle any backend challenge and build impressive, real-world applications using NestJS
            🙌
          </p>
          <p>
            If you’re curious to know the specific projects that we’ll build and the respective
            learnings from each, here they are:
          </p>
          <div className="relative md:-mx-16 lg:-mx-40 xl:-mx-80">
            <ProjectCards />
          </div>
          <h2>Why this course is different 🌟</h2>
          <p>When it comes to learning NestJS, not all courses are created equal.</p>
          <p>Here's what sets this course apart:</p>
          <div className="relative md:-mx-8 lg:-mx-16">
            <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
              <div className="w-full rounded-lg border border-gray-200 bg-white px-4 pb-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h4 className="text-center">🎨 Project-Based Learning</h4>
                <ul className="text-sm leading-6 text-gray-700">
                  <li>
                    Forget passive learning and endless theory. This course is all about learning by
                    doing.
                  </li>
                  <li>
                    You'll dive into real-world projects from day one, building practical
                    applications that reinforce your understanding of NestJS.
                  </li>
                  <li>
                    Studies show that active participation leads to better learning outcomes, and
                    that's exactly what you'll get here.
                  </li>
                </ul>
              </div>
              <div className="w-full rounded-lg border border-gray-200 bg-white px-4 pb-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h4 className="text-center">📹 📚 Dual Learning Formats</h4>
                <ul className="text-sm leading-6 text-gray-700">
                  <li>
                    We all learn differently. That's why this course offers both comprehensive video
                    lessons and detailed text-based versions of each lesson.
                  </li>
                  <li>
                    Prefer to learn visually? Follow along with the videos, where I walk you through
                    each concept and project step-by-step.
                  </li>
                  <li>
                    Learn better by reading? The written lessons provide a rich, blog-style format,
                    complete with code snippets, explanations, and images.
                  </li>
                </ul>
              </div>
              <div className="w-full rounded-lg border border-gray-200 bg-white px-4 pb-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h4 className="text-center">🧠 Meticulously Crafted Curriculum</h4>
                <ul className="text-sm leading-6 text-gray-700">
                  <li>
                    I've poured my heart and soul into designing the most effective, efficient
                    learning path to NestJS mastery.
                  </li>
                  <li>
                    Every element of this course, from the sequence of topics to the pacing of
                    projects, has been carefully considered to ensure your success.
                  </li>
                  <li>
                    The result is a curriculum that's designed to take you from NestJS novice to
                    proficient practitioner in the most productive way possible.
                  </li>
                </ul>
              </div>
              <div className="w-full rounded-lg border border-gray-200 bg-white px-4 pb-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h4 className="text-center">💡 Constant Innovation</h4>
                <ul className="text-sm leading-6 text-gray-700">
                  <li>
                    The world of backend development is always evolving. And so is this course.
                  </li>
                  <li>
                    I'm constantly updating and improving the content based on student feedback,
                    industry trends, and my own continued learning.
                  </li>
                  <li>
                    When you enroll, you don't just get access to the course as it is today. You get
                    lifetime access to all future updates and additions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="pricing" className="relative md:-mx-16 lg:-mx-40 xl:-mx-80">
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-2">Ready to go?</h2>
              <p>
                After enrolling, you'll have immediate access to all course materials, including
                video lessons, code examples, and projects.
              </p>
              <p>Here are the pricing details:</p>
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
          <h2 className="mb-2">Who is making this course? 🤓</h2>
          <p>
            👋 I'm <Link href="/about">Tom</Link>, a proud JS/TS dev from Brighton, UK.
          </p>
          {/* <img
            src="http://localhost:3000/_next/image?url=%2Fstatic%2Fimages%2Fabout.jpg&w=3840&q=75"
            alt=""
            className="max-w-sm"
          /> */}
          <p>
            I've been where you are. I know how daunting it can be to learn complex backend concepts
            and stay up-to-date with the latest technologies.
          </p>
          <p>
            But I also know the immense joy and satisfaction that comes from mastering a skill like
            NestJS.
          </p>
          <p>
            It's not just about the technical knowledge. It's about the confidence, the
            opportunities, and the ability to bring your ideas to life.
          </p>
          <p>
            That's why I'm passionate about helping developers like you unlock your full potential
            and achieve your goals.
          </p>
          <p>
            Through my blog, courses, and community, I've helped over 20,000 developers level up
            their skills and build amazing things.
          </p>
          <p>And I can't wait to help you do the same.</p>
          <p>Let's build something incredible together 🚀.</p>
          <FaqSection />
        </div>
      </div>
    </>
  )
}
