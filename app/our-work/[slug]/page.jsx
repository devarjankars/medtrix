import WorkCard from "@/components/WorkCard";
import { projects } from "@/data/projects";

const filters = [
  "ALL PROJECTS",
  "STRATEGY & CONSULTING",
  "COMMERCIAL SOLUTIONS",
  "MEDICAL AFFAIRS",
  "DIGITAL",
];

export default function WorkPage() {
  return (

<section className="
bg-black
min-h-screen
px-6
lg:px-24
py-20
">

<p className="
text-white
uppercase
text-sm
mb-12
">
OUR WORK
</p>

<div className="
flex
gap-5
overflow-auto
mb-20
">

{filters.map((item,index)=>(
<button
key={index}
className="
px-8
py-4
rounded-xl
bg-[#1E1E1E]
text-white
whitespace-nowrap
hover:bg-white
hover:text-black
transition
"
>
{item}
</button>
))}

</div>

{projects.map(project=>(
<WorkCard
key={project.id}
project={project}
/>
))}

</section>

  );
}