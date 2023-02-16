/* eslint-disable @next/next/no-img-element */
import ConvertKitForm from './ConvertKitForm'

export default function Magnet() {
  return (
    <div className="polka my-8 flex flex-col items-center rounded-md p-6 sm:flex-row sm:items-start ">
      <img
        src="static/images/nestjs.png"
        alt="NestJS logo"
        className="mt-0 mb-4 h-20 sm:mr-6 sm:h-20"
      />
      <div>
        <span className="mb-1 inline-block text-xl font-bold dark:text-gray-800">
          Learn NestJS Fundamentals
        </span>
        <span className="flex flex-col dark:text-gray-800">
          Want to use NestJS to it's full potential and understand how it really works? Check out my
          free guide which covers concepts like Dependency Injection, IoC Containers and more:
        </span>
        <ConvertKitForm />
      </div>
    </div>
  )
}
