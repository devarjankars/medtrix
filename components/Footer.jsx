import Link from "next/link";

const footerData = [
  {
    title: "Capabilities",
    links: ["Commercial Solutions", "Medical Affairs", "Digital & Innovation", "MedTrix AI Catalysts"],
  },
  {
    title: "About Us",
    links: ["One Belief", "One Team", "One Standard"],
  },
  {
    title: "Our Work",
    links: ["Case Studies", "Innovation Stories"],
  },
  {
    title: "Clients",
    links: ["USA", "India"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="w-[90%] md:w-[80%] mx-auto py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-12">

          <div className="col-span-2 lg:col-span-1 flex justify-center lg:justify-start">
            <img src="/logo.png" alt="Medtrix" className="w-[180px] object-contain" />
          </div>

          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="text-white text-2xl font-bold mb-6">{section.title}</h3>
              <div className="flex flex-col gap-5">
                {section.links.map((link, i) => (
                  <p key={i} className="text-gray-300 text-lg cursor-pointer hover:text-white transition">
                    {link}
                  </p>
                ))}
              </div>
            </div>
          ))}

        </div>
        <div className="border-t border-[#222222] pt-8 mt-8 flex flex-col lg:flex-row items-center justify-between">
          <p>© 2026. All rights reserved. Medtrix Healthcare</p>
          <div className="flex  gap-6 mt-4">
            <Link href="#" className="text-gray-300 hover:text-white transition mr-4">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
