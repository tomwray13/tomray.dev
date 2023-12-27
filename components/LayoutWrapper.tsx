/* eslint-disable @next/next/no-img-element */
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { ReactNode } from 'react'
import { useRouter } from 'next/router'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  const { asPath } = useRouter()
  return (
    <SectionContainer>
      <div className="mx-auto flex h-screen max-w-5xl flex-col justify-between">
        <header className="flex items-center justify-between py-4">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center py-4 pr-6 text-xl font-bold text-gray-700 hover:text-gray-900 dark:text-white">
                <img
                  src="/static/images/profile.jpg"
                  alt="Tom Ray"
                  className="mr-2 h-8 w-8 rounded-full"
                />
                <span>Tom Ray</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`${
                    asPath === link.href ? `underline` : ``
                  } text-midnight p-1 font-normal dark:text-gray-100 sm:p-4`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
            {/* <ThemeSwitch /> */}
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        {/* <Footer /> */}
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
