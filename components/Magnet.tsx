export default function Magnet() {
  return (
    <div className="my-8 flex rounded-md border bg-gray-100 p-6">
      <img src="static/images/nestjs.png" alt="NestJS logo" className="mr-6 h-20" />
      <div>
        <span className="text-xl font-bold">Get Advanced NestJS Tips, Techniques & Strategies</span>
        <span className="flex flex-col">
          Enjoy this post? Download this cheat sheet and optimize the underperforming posts and
          pages on your website to increase your rank, link clicks, and leads.
        </span>
        <div className="mt-4">
          <input
            type="email"
            name="magnet"
            id="magnet"
            className="mr-2 rounded-md"
            placeholder="e.g. elon@tesla.com"
          />
          <button className="rounded-md bg-green-600 px-4 py-2 font-bold text-white">
            Get cheat sheet now
          </button>
        </div>
      </div>
    </div>
  )
}
