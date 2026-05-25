"use client";
import { projects } from "@/Data/project";

export default function WorkDetailPage({ params }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    return (
      <div className="w-[90%] md:w-[80%] mx-auto py-20 text-white">
        <h1 className="text-4xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="w-[90%] md:w-[80%] mx-auto py-20 text-white">
      <img src={project.image} alt={project.title} className="w-full h-[500px] object-cover rounded-3xl mb-10" />
      <div className="flex gap-3 mb-6">
        {project.tags.map(tag => (
          <span key={tag} className="border border-[#444] px-4 py-2 text-xs rounded-md">{tag}</span>
        ))}
      </div>
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-sm text-gray-400 uppercase mb-2">Platform / Stack</p>
      <p className="text-gray-300 mb-8">{project.stack}</p>
      <div className="flex flex-col gap-3">
        {project.desc.map((item, i) => (
          <p key={i} className="text-gray-300">{item}</p>
        ))}
      </div>
    </div>
  );
}
