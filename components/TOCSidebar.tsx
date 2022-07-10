import { useEffect, useState } from 'react'
import { Toc } from 'types/Toc'

interface TOCSidebarProps {
  toc: Toc
  indentDepth?: number
  fromHeading?: number
  toHeading?: number
  asDisclosure?: boolean
  exclude?: string | string[]
}

/**
 * Generates an inline table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 *
 * @param {TOCSidebarProps} {
 *   toc,
 *   indentDepth = 3,
 *   fromHeading = 1,
 *   toHeading = 6,
 *   asDisclosure = false,
 *   exclude = '',
 * }
 *
 */
const TOCSidebar = ({
  toc,
  indentDepth = 3,
  fromHeading = 1,
  toHeading = 6,
  asDisclosure = false,
  exclude = '',
}: TOCSidebarProps) => {
  const re = Array.isArray(exclude)
    ? new RegExp('^(' + exclude.join('|') + ')$', 'i')
    : new RegExp('^(' + exclude + ')$', 'i')

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
  )

  function getIDs(items) {
    return items.map((item) => item.url.slice(1))
  }

  function useActiveId(itemIds) {
    const [activeId, setActiveId] = useState(``)

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id)
            }
          })
        },
        { rootMargin: `0% 0% -80% 0%` }
      )

      itemIds.forEach((id) => {
        observer.observe(document.getElementById(id))
      })
    }, [itemIds])

    return activeId
  }

  const idList = getIDs(toc)
  const activeId = useActiveId(idList)

  console.log('active', filteredToc)

  const tocList = (
    <ul>
      {filteredToc.map((heading) => (
        <li
          key={heading.value}
          className={`${heading.depth >= indentDepth && 'ml-6'} ${
            heading.url.slice(1) === activeId && `font-semibold opacity-100`
          } mb-2 text-sm opacity-60 hover:underline hover:opacity-100`}
        >
          <a href={heading.url}>{heading.value}</a>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="sticky top-0 hidden h-screen w-full pt-6 pb-8 pl-6 lg:block xl:pl-10">
      <h3 className="mb-2 font-bold">Table of Contents</h3>
      <div className="">{tocList}</div>
    </div>
  )
}

export default TOCSidebar
