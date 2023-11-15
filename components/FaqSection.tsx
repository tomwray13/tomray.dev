import React from 'react'

const faqs = [
  {
    question: 'What if I am not happy with the course?',
    answer: `We're confident that you'll find immense value in our course. However, if you're not completely satisfied, we offer a 30-day, no-questions-asked money-back guarantee. Just reach out to us within the first 30 days of purchase for a full refund.`,
  },
  {
    question: `What does lifetime access mean?`,
    answer: `Lifetime access means that once you purchase the course, you will have unlimited access to the course material for as long as the course exists. You can go back and review the content whenever you need a refresher, completely free of any additional charges.`,
  },
  {
    question: `Will I receive updates to the course material?`,
    answer: `Yes, you will! With lifetime updates, you'll automatically receive access to all future iterations of the course content, including new lessons, projects, and resources, at no extra cost.`,
  },
  {
    question: `What format is the course?`,
    answer: `The course is currently delivered in a text-based format, akin to high-quality blog tutorials. This allows for easy follow-along at your own pace. We're actively working on adding video tutorials for each lesson to cater to different learning styles.`,
  },
  {
    question: `When will the video tutorials be available?`,
    answer: `We're dedicated to enhancing the course with video tutorials as soon as possible. We aim to roll these out in phases in the coming months. As an early adopter, you'll be the first to access these updates as they go live.`,
  },
  {
    question: `How does the course ensure I'm learning practical skills?`,
    answer: `Each project in the course is designed around real-world applications, ensuring that you gain practical experience. The lessons are structured to take you from the basics to advanced topics, culminating in a comprehensive understanding that you can apply directly to your own projects.`,
  },
  // ... other FAQs
]

const FaqSection: React.FC = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4">❓ Frequently asked questions</h2>
        <dl className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg bg-gray-100 p-4 shadow">
              <dt className="text-lg font-medium text-gray-900">{faq.question}</dt>
              <dd className="mt-2 text-sm text-gray-600">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default FaqSection
