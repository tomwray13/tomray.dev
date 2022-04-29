import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="my-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
        </div>
        {/* <div className="mb-8 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div> */}
      </div>
    </footer>
  )
}
