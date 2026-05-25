export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-zinc-900 mb-4">Contact Us</h1>
      <p className="text-zinc-500 mb-10">Have a question or want to work with us? Send us a message.</p>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-zinc-700">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="border border-zinc-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-zinc-700">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="border border-zinc-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-zinc-700">Message</label>
          <textarea
            rows={5}
            placeholder="How can we help?"
            className="border border-zinc-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>
        <button
          type="submit"
          className="self-start bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
