import Link from 'next/link'

const PopularArticles = ({ currentPath }) => {
  const data = [
    { title: 'Ultimate guide to unit testing in NestJS', path: '/nestjs-unit-testing' },
    { title: 'How to set up and use NestJS caching', path: '/nestjs-caching-redis' },
    { title: 'Ultimate guide to logging in NestJS', path: '/nestjs-logging' },
    { title: 'How to set up and use NestJS config', path: '/nestjs-config' },
    { title: 'Deploying a NestJS app to Cloud Run', path: '/deploy-nestjs-cloud-run' },
    { title: 'Writing a NestJS Dockerfile', path: '/nestjs-docker-production' },
    { title: 'NestJS local dev with Docker Compose', path: '/nestjs-docker-compose-postgres' },
  ]
  const links = data.filter((link) => link.path !== `/${currentPath}`)
  const listItems = links.map((link, index) => (
    <li key={index} className="mb-2 text-sm text-gray-600 hover:underline hover:opacity-100">
      <Link href={link.path}>{link.title}</Link>
    </li>
  ))

  return (
    <div>
      <h3 className="mb-1 font-bold">🔥 More popular NestJS articles:</h3>
      {listItems}
    </div>
  )
}

export default PopularArticles
