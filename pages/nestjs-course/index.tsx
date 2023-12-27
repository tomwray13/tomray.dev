/* eslint-disable @next/next/no-img-element */
import ConvertKitForm from '@/components/ConvertKitForm'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'
import TestimonialCard from '../../components/TestimonialCard'
import ProjectCard from '../../components/ProjectCard'
import CountdownTimer from '../../components/CountdownTimer'
import FaqSection from '../../components/FaqSection'

export default function NestJSCourse() {
  const targetDate = new Date(2024, 0, 3)
  const currentDate = new Date()
  currentDate.setMonth(currentDate.getMonth() - 1)
  if (currentDate.getMonth() === 11 && new Date().getMonth() === 0) {
    currentDate.setFullYear(currentDate.getFullYear() - 1)
  }
  const monthName = currentDate.toLocaleString('default', { month: 'long' })
  const year = currentDate.getFullYear()
  const monthYear = `${monthName} ${year}`

  const project1 = {
    label: 'Project 1',
    title: '🌈 Random Emoji Generator API',
    isReady: true,
    lessons: [
      'The NestJS Lifecycle',
      'Middleware',
      'Guards',
      'Interceptors (before handlers)',
      'Pipes',
      'Route Handlers',
      'Interceptors (after handlers)',
      'Exception filters',
      'Dependency injection',
      'E2e testing',
      'CI/CD set up with Github Actions & Railway',
    ],
  }
  const project2 = {
    label: 'Project 2',
    title: '🪴 Ultimate NestJS Starter Repo',
    isReady: true,
    lessons: [
      'Adding a Core module with ConfigModule',
      'Using an interceptor to enforce a consisten HTTP response',
      'Security considerations (Helmet & validation pipes)',
      'Setting up a custom logger',
      'Docker compose set up (postgres & redis)`',
      'Interacting with the database (with Prisma)',
      'Interacting with the cache (with Redis)',
      'Unit, integration & e2e testing',
      'Setting up the CI/CD pipeline with Github Actions',
      'Deployment with Railway',
    ],
  }
  const project3 = {
    label: 'Project 3',
    title: '🕸️ URL Shortener API',
    isReady: true,
    lessons: [
      'Adding CRUD endpoints',
      'Business logic: creating a shortened URL',
      'Business logic: redirecting a shortened URL',
      'Business logic: updating and deleting a shortened URL',
      'Business logic: return a list of saved shortened URLs',
      'API key authentication',
      'Unit testing',
      'Integration testing & e2e testing',
      'Deployment with Railway',
    ],
  }
  const project4 = {
    label: 'Project 4',
    title: '🏡 Real estate listings (using queues)',
    isReady: true,
    lessons: [
      'Add logic for creating new real estate listings',
      'Attach image files to HTTP request',
      'Setting up the queue with Bull',
      'Visualise the queue with Bull Board',
      'Sending files to the queue for processing',
      'Uploading files to Google Cloud Storage',
      'Storing a reference to GCP image in the database',
      'Unit testing',
      'Integration testing',
      'E2e testing',
      'Deployment with Railway',
    ],
  }
  const project5 = {
    label: 'Project 5',
    title: '📬 Slack Clone: Monorepo with NestJS & NextJS',
    isReady: false,
    lessons: [
      'Using a monorepo set up with pnpm workspaces',
      'Setting up a WebSocket server and client in NestJS',
      'Building user authentication from scratch in both NestJS & NextJS',
      'Add user signup & login (i.e. authentication, including Google OAuth)',
      'Set up access tokens and refresh tokens',
      '... and more!',
    ],
  }
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
                  <span className="opacity-64 rounded-full bg-white px-3 py-1 text-sm text-gray-900 shadow">
                    ⚡️ Last updated in {monthYear}
                  </span>
                  <h1 className="mt-4 mb-3 text-4xl dark:text-gray-900">
                    Learn NestJS by Building Real Projects
                  </h1>
                </div>
                <div className="prose mb-2 flex max-w-none flex-col items-center text-lg text-gray-900 dark:text-gray-700">
                  <p className="mb-0">
                    An immersive, hands-on course where you'll learn NestJS by building real-world
                    projects from scratch, covering NestJS concepts and best practices.
                  </p>
                  <CountdownTimer targetDate={targetDate} />
                  <ConvertKitForm formId="5405777" buttonText="Join Waiting List" />
                  {/* <div className="grid grid-cols-2 gap-4">
                    <a
                      href="https://courses.tomray.dev/nestjs-course"
                      data-text="Buy Course"
                      className="buy-course-button"
                    >
                      Buy now for $299
                    </a>
                    <a
                      href="https://courses.tomray.dev/free-sample-learn-nestjs-by-building-projects"
                      data-text="Try course for free"
                      className="try-course-button"
                    >
                      Try course for free
                    </a>
                  </div> */}
                  {/* <CountdownTimer targetDate={targetDate} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="prose mx-auto max-w-2xl pt-6 dark:prose-dark">
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
            <div className="flex flex-wrap justify-center gap-8">
              <ProjectCard
                isReady={true}
                label={project1.label}
                title={project1.title}
                lessons={project1.lessons}
              />
              <ProjectCard
                isReady={true}
                label={project2.label}
                title={project2.title}
                lessons={project2.lessons}
              />
              <ProjectCard
                isReady={true}
                label={project3.label}
                title={project3.title}
                lessons={project3.lessons}
              />
              <ProjectCard
                isReady={true}
                label={project4.label}
                title={project4.title}
                lessons={project4.lessons}
              />
              <ProjectCard
                isReady={project5.isReady}
                label={project5.label}
                title={project5.title}
                lessons={project5.lessons}
              />
            </div>
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
          <div className="polka full-screen text-cente mt-16">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 xl:px-0">
              <div className=" py-32">
                <div className="flex flex-col items-center">
                  <h2 className="mb-2 mt-0">🏃‍♀️ Ready to Begin Your NestJS Journey?</h2>
                  <p className="text-center">
                    An immersive, hands-on course where you'll learn NestJS by building real-world
                    projects from scratch, covering NestJS concepts and best practices.
                  </p>
                  <div className="prose mb-2 flex w-full max-w-none flex-col items-center text-lg text-gray-900 dark:text-gray-700">
                    <CountdownTimer targetDate={targetDate} />
                    <ConvertKitForm formId="5405777" buttonText="Join Waiting List" />
                    {/* <script src="https://cdn.podia.com/embeds.js" async></script> */}
                    {/* <div className="grid grid-cols-2 gap-4">
                      <a
                        href="https://courses.tomray.dev/nestjs-course"
                        data-text="Buy Course"
                        className="buy-course-button"
                      >
                        Buy now for $299
                      </a>
                      <a
                        href="https://courses.tomray.dev/free-sample-learn-nestjs-by-building-projects"
                        data-text="Try course for free"
                        className="try-course-button"
                      >
                        Try course for free
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
