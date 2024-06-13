import React from 'react'

interface TestimonialProps {
  text: string
  author: string
  authorTitle: string // e.g., 'CEO at Company'
  authorImage: string // URL to the author's image
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  text,
  author,
  authorTitle,
  authorImage,
}) => {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-gray-100 shadow-md md:max-w-2xl">
      <div className="md:flex">
        <div className="px-4 pt-4">
          <p className="my-0 mb-0">{text}</p>
          <div className="flex items-center">
            <img className="mr-4 h-10 w-10 rounded-full" src={authorImage} alt={author} />
            <div className="text-sm">
              {/* <p className="mb-0 leading-none text-gray-900">{author}</p> */}
              <p className="mt-2 text-gray-500">{authorTitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
