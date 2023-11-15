/* eslint-disable @next/next/no-img-element */
import CountdownTimer from '@/components/CountdownTimer'
import FaqSection from '@/components/FaqSection'
import ProjectCard from '@/components/ProjectCard'
import { PageSEO } from '@/components/SEO'
import TestimonialCard from '@/components/TestimonialCard'
import Link from 'next/link'

export default function NestJSCourseEarlyAccess() {
  const targetDate = new Date(new Date().getFullYear(), 10, 23)
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
    title: '🪴 Building the Ultimate NestJS Starter Repo',
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
  const project6 = {
    label: 'Project 6',
    title: '🐦 Twitter Clone: Using GraphQL with NestJS',
    isReady: false,
    lessons: [
      'Using GraphQL with NestJS',
      'Using a monorepo approach',
      'Leverage a GraphQL client in the frontend',
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
                  <span className="opacity-64 rounded-full bg-green-200 px-3 py-1 font-bold text-green-700">
                    🎉 EARLY ACCESS
                  </span>
                  <h1 className="mt-2 mb-3 text-4xl dark:text-gray-900">
                    Learn NestJS by Building Real Projects
                  </h1>
                </div>
                <div className="prose mb-2 max-w-none text-lg text-gray-900 dark:text-gray-700">
                  <p>
                    Join the exclusive cohort of developers mastering NestJS through hands-on,
                    real-world projects.
                  </p>
                  <p>Spots are limited to 50 developers for this early access launch!</p>
                  <CountdownTimer targetDate={targetDate} />
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
          <p>Here's what some fellow NestJS developers are saying about my content:</p>

          <div className="relative -mx-8 mt-8 md:-mx-16 lg:-mx-32 xl:-mx-40">
            <div className="grid grid-cols-1 gap-8 px-8 md:grid-cols-3 md:px-0">
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

          <h2 className="mb-2">✍️ What projects are included in the course?</h2>
          <p>
            This course is project-based. See the list of projects and the respective name of the
            lessons in the course
          </p>
          <div className="relative -mx-8 md:-mx-16 lg:-mx-32 xl:-mx-40">
            <div className="grid grid-cols-1 gap-8 px-8 sm:grid-cols-2 md:grid-cols-3 md:px-0">
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
              <ProjectCard
                isReady={project6.isReady}
                label={project6.label}
                title={project6.title}
                lessons={project6.lessons}
              />
            </div>
          </div>

          <h2 className="mb-2">💰 How much will the course cost?</h2>
          <p>
            The course price is $299 USD, but you will have access to a 70% off discount code (i.e.
            meaning your course price is $89.70)
          </p>

          <h2 className="mb-2">🤓 Who is making this course?</h2>
          <p>
            👋 Hi! I'm <Link href="/about">Tom</Link>, a proud JS/TS dev from Brighton, UK. Through
            my blog, I've helped over 20,000 NestJS developers build cool projects and advance their
            careers. I'm also the creator of{' '}
            <Link href="/nestjs-fundamentals-course">NestJS Fundamentals</Link>, a free course
            that's been taken by over 1000s of developers.
          </p>
          <FaqSection />
          <div>
            <h2 className="mb-2">🏃‍♀️ Ready to Begin Your NestJS Journey?</h2>
            <p>Spots are limited to 50 people for this early access launch.</p>
            <CountdownTimer targetDate={targetDate} />
          </div>
        </div>
      </div>
    </>
  )
}
