"use client";

export default function Contact() {
  return (
    <section className="w-[90%] md:w-[80%] mx-auto py-20">
      <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
      <p className="text-gray-400 mb-10">Have a question or want to work with us? Send us a message.</p>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-300">Name</label>
          <input type="text" placeholder="Your name" className="bg-[#18181B] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-300">Email</label>
          <input type="email" placeholder="you@example.com" className="bg-[#18181B] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-300">Message</label>
          <textarea rows={5} placeholder="How can we help?" className="bg-[#18181B] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-red-500 resize-none" />
        </div>
        <button type="submit" className="self-start bg-red-600 hover:bg-red-500 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors">
          Send Message
        </button>
      </form>
    </section>
  );
}
