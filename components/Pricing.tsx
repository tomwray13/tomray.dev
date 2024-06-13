import React from 'react'
import CountdownText from './CountdownText'

export default function Pricing({ deadline }: { deadline: null | Date }) {
  // add query param for automatic discount e.g. ?coupon=SUB933_20_OFF
  const tiers = [
    {
      name: 'Basic Plan',
      id: 'tier-basic',
      href: deadline
        ? 'https://courses.tomray.dev/05f27a04-52c0-4d32-9f57-e9e7ee21df9f/buy?coupon=WELCOME_60'
        : 'https://courses.tomray.dev/05f27a04-52c0-4d32-9f57-e9e7ee21df9f/buy',
      price: 419,
      description: 'Covers the fundamentals of NestJS',
      features: [
        'Access to the first 3 projects',
        '30-day money-back guarantee',
        'Lifetime access',
      ],
      featured: false,
    },
    {
      name: 'Ultimate Plan',
      id: 'tier-ultimate',
      href: deadline
        ? 'https://courses.tomray.dev/nestjs-course/buy?coupon=WELCOME_60'
        : 'https://courses.tomray.dev/nestjs-course/buy',
      price: 499,
      description: 'My premium plan that covers both fundamentals and advanced topics.',
      features: [
        'Everything in the Basic plan',
        '30-day money-back guarantee',
        'Certificate of Completion',
        'Includes Project 4: Real Estate Listings project',
        'Includes Project 5: Slack Clone project',
      ],
      featured: true,
    },
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div>
      <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-y-6 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-white shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none'
                : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl',
              'rounded-3xl p-4 ring-1 ring-gray-900/10 sm:p-6'
            )}
          >
            <h3 id={tier.id} className="text-base font-semibold leading-7 text-blue-600">
              {tier.name}
            </h3>
            <p className="mt-4 mb-2 flex items-baseline gap-x-2">
              <span
                className={`text-5xl font-bold tracking-tight ${
                  deadline ? `text-gray-400 line-through` : `text-gray-900`
                }`}
              >
                ${tier.price}
              </span>
              {deadline && (
                <span className="text-5xl font-bold tracking-tight text-gray-900">
                  ${(tier.price * 0.4).toFixed(2)}
                </span>
              )}
            </p>
            {!deadline && (
              <p className="mt-0 text-base leading-7 text-gray-600">{tier.description}</p>
            )}
            {deadline && (
              <p className="mt-0 text-base leading-7 text-gray-600">
                Exclusive 60% discount expiring in <CountdownText targetDate={deadline} />
              </p>
            )}
            <ul className="space-y-3 pl-0 text-sm leading-6 text-gray-600">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-blue-600 !text-white shadow hover:bg-blue-500'
                  : 'text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center !font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:mt-6'
              )}
            >
              Register Now
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
