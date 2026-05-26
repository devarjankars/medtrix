


import { notFound } from "next/navigation";

export default function ProjectDetail({ params }) {
  
  const project = projects.find(
    (p) => p.slug === params.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <section className="w-[90%] md:w-[80%] mx-auto py-20 text-white">

      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-[22px] mb-10"
      />

      <h1 className="text-5xl mb-8">
        {project.title}
      </h1>

      <div className="flex gap-3 mb-10 flex-wrap">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="
            border
            border-[#3A3A3A]
            px-4
            py-2
            rounded-md
            "
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mb-6">
        Platform: {project.stack}
      </p>

      <p className="mb-10">
        Timeline: {project.timeline}
      </p>

      {project.desc.map((item, i) => (
        <p
          key={i}
          className="mb-4 text-gray-300"
        >
          {item}
        </p>
      ))}

    </section>
  );
}