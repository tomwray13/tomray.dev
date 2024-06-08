import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectCards = () => {
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
    isReady: true,
    lessons: [
      'Using a monorepo set up with pnpm workspaces',
      'Setting up a WebSocket server and client in NestJS',
      'Building user authentication from scratch in both NestJS & NextJS',
      'Google authentication',
      'Set up access tokens and refresh tokens',
      '... and more!',
    ],
  }
  return (
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
  )
}

export default ProjectCards
