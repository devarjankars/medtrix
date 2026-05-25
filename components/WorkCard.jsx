"use client";

import Link from "next/link";

export default function WorkCard({ project }) {
  return (
    <div className="
    grid
    lg:grid-cols-[50%_50%]
    gap-8
    mb-20
    ">

      <div className="
      rounded-[22px]
      overflow-hidden
      ">
        <img
          src={project.image}
          alt={project.title}
          className="
          w-full
          
          lg:h-[auto]
          object-contain
          "
        />
      </div>

      <div className="text-white">

        <h2 className="
        text-3xl
        lg:text-5xl
        font-medium
        leading-tight
        mb-6
        ">
          {project.title}
        </h2>

        <div className="
        flex
        gap-3
        mb-8
        ">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="
              border
              border-[#444]
              px-4
              py-2
              text-xs
              rounded-md
              "
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="
        border-y
        border-[#2d2d2d]
        py-6
        mb-6
        ">

          <p className="
          text-sm
          text-gray-400
          uppercase
          mb-2
          ">
            Platform / Stack
          </p>

          <p>{project.stack}</p>

        </div>

        <div className="
        text-gray-300
        space-y-4
        mb-10
        ">
          {project.desc.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>

        <Link
          href={`/work/${project.slug}`}
          className="
          inline-flex
          items-center
          px-8
          py-4
          rounded-full
          bg-red-500
          hover:bg-red-600
          transition
          "
        >
          EXPLORE →
        </Link>

      </div>

    </div>
  );
}