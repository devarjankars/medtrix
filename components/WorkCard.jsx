"use client";

import Link from "next/link";

export default function WorkCard({ project }) {
  return (
    <div
      className="
      grid
      lg:grid-cols-[50%_50%]
      gap-8
      mb-24
    "
    >
      {/* LEFT IMAGE */}
      <div className="rounded-[22px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            object-cover
            rounded-[22px]
          "
        />
      </div>

      {/* RIGHT */}
      <div className="text-white flex flex-col">

        <h2
          className="
          text-3xl
          lg:text-[52px]
          leading-tight
          font-medium
          mb-6
        "
        >
          {project.title}
        </h2>

        {/* TAGS */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="
                border
                border-[#3A3A3A]
                px-4
                py-2
                rounded-md
                text-[11px]
                uppercase
                tracking-[2px]
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* STACK + TIMELINE */}
        <div
          className="
          border-y
          border-[#252525]
          py-6
          mb-8
          grid
          lg:grid-cols-2
          gap-8
        "
        >
          {/* LEFT */}
          <div>
            <p className="text-xs uppercase text-gray-400 mb-3 tracking-[2px]">
              Platform / Stack
            </p>

            <p className="text-white text-lg">
              {project.stack}
            </p>
          </div>

          {/* RIGHT */}
          <div className="lg:border-l border-[#252525] lg:pl-8">
            <p className="text-xs uppercase text-gray-400 mb-3 tracking-[2px]">
              Timeline / Status
            </p>

            <p className="text-white text-lg">
              {project.timeline}
            </p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="space-y-4 text-gray-300 mb-10">
          {project.desc.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>

        <Link
          href={`/our-work/${project.slug}`}
          className="
            inline-flex
            w-fit
            items-center
            px-8
            py-4
            rounded-full
            bg-[#FF2F2F]
            hover:scale-105
            transition
          "
        >
          EXPLORE →
        </Link>
      </div>
      
    </div>
  );
}