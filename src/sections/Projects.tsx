import GreenFert from "@/assets/images/GreenFert Co.png";
import GreenEarth from "@/assets/images/GreenEarth Co.png";
import AyyanTravel from "@/assets/images/Ayyan Travel & Mobiles.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/card";

const portfolioProjects = [
  {
    company: "GreenFert Co",
    year: "2024",
    title: "Complete WordPress & WooCommerce Website",
    results: [
      { title: "Enhanced user experience" },
      { title: "Improved site speed" },
      { title: "Increased mobile traffic" },
    ],
    link: "https://greenfert.co",
    image: GreenFert,
  },
  {
    company: "GreenEarth Co",
    year: "2024",
    title: "Complete Website",
    results: [
      { title: "Boosted sales" },
      { title: "Expanded customer reach" },
      { title: "Increased brand awareness" },
    ],
    link: "https://greenearth.pk",
    image: GreenEarth,
  },
  {
    company: "Ayyan Travels & Mobiles",
    year: "2023",
    title: "Startup ECommerce Website",
    results: [
      { title: "Enhanced user experience" },
      { title: "Improved site speed" },
      { title: "Increased mobile traffic" },
    ],
    link: "https:ayyantravelandmobiles,com",
    image: AyyanTravel,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg: py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-World Results"
          title="Featured Projects "
          description="Transforming concepts into engaging digital experience"
        />
        <div className=" mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-3xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4" />
                  <ul className="flex flex-col gap-4 mt-4">
                    {project.results.map((result) => (
                      // eslint-disable-next-line react/jsx-key
                      <li className="flex gap-2 text-sm text-white/50">
                        <CheckCircleIcon className="size-5" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-2 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:rounded-2xl lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
